import React from 'react'
import '../pages/pages.css'
import { useEffect, useState } from 'react'
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OrderList = () => {
    const database = getDatabase();

  let [info, setInfo] = useState("")
  let [todo, setTodo] = useState([])
  let [toggleBtn, setToggleBtn] = useState(false)
  let [todoId, setTodoId] = useState()


  let formHandler = (e) => {
    setInfo(e.target.value);
  }


//  write operation--------------------------
  let submitHandler = () => {
    set(push(ref(database, 'MyShop')), {
     info: info, })
     .then(()=>{
      setInfo("")
    })
  }

  
// read operation------------------------------------
  useEffect(() => {
    const todoRef = ref(database, 'MyShop');
    onValue(todoRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
          arr.push({...item.val(), id:item.key})
      })
      setTodo(arr)
    });
  },[]);

 
// update operation--------------------------
  let updateHandler = (item)=> {
    setTodoId(item.id)
    setInfo(item.info)
    setToggleBtn(true)
  }

  let handleEdit = ()=>{
    update(ref(database, 'MyShop/'+ todoId ),{
      info: info})
      .then(()=>{
      setToggleBtn(false)
      setInfo("")
      toast("Data Update Succeeeded !")
    })
  }


// delete operation--------------------
  let deleteHandler = (id) => {
    remove(ref(database, 'MyShop/'+id))
    .then(()=>(
      alert('Data Delete Succeeeded !')
    ))
  }

// alldelete operation-------------------------
  let handleAllDelete = () =>{
    remove(ref(database, 'MyShop'))
    toast.success('🦄 All Delete Succeeeded !', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }



  return (
    <>
    <section className='orderList_section'>
        <div className='orderList container'>
          <div className='order_form'>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

            <div className='input-box'>
                <input value={info} placeholder='Enter your text' onChange={formHandler} />
                {
                toggleBtn 
                ? <button onClick={handleEdit} >Update</button>
                : <button onClick={submitHandler} >Add</button>
                }
            </div>
            
            <div className='display'>
                <ul>
                    {
                        todo.map((item, index)=>(
                        <li key={index}>{item.info}
                        <button onClick={()=>updateHandler(item)} >Edit</button>
                        <button onClick={()=>deleteHandler(item.id)} >Delete</button>
                        </li>
                        ))
                    }
                </ul>
            </div>

            <div className='comBtn'>
                <button onClick={handleAllDelete}>All Delete</button>
            </div>
          </div>
          
          <div className='img_box'>
              <img src="images/orderImg.jpg" alt="Tacos and Drink" title="we love Taco"/>
          </div>

            

        </div>
    </section>
        
    </>
  )
}

export default OrderList