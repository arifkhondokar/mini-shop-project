import React from 'react'
import '../pages/pages.css'

const Menu = () => {
  return (
    <>
    <section className='menu_section'>
        <div className='menu container'>
            <div className='menu-box'>
                <form className="menu-list">
                    <h2 className='sub-heading' >Our Menu</h2>
                    <table border="2">
                        <caption>Our Tacos</caption>
                        <thead>
                            <tr>
                                <th>Tacos</th>
                                <th scope="col"><abbr title="Quantity">Qty</abbr></th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" rowspan="3">Crunchy</th>
                                <td>1</td>
                                <td>$1.50</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>$2.50</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>$3.50</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="3">Soft</th>
                                <td>1</td>
                                <td>$2.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>$3.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>$4.50</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3">
                                    Chips &amp: Salsa $2
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <br/>
                </form>
            </div>
            <div className='img_box'>
                <div className='img_box-01'>
                    <img src="images/food-menu.jpg" alt="Tacos and Drink" title="we love Taco"  />
                </div>
                <div className='img_box-01'>
                    <img src="images/menu011.jpg" alt="Tacos and Drink" title="we love Taco"  />
                </div>
                <div className='img_box-01'>
                    <img src="images/menu02.jpg" alt="Tacos and Drink" title="we love Taco"  />
                </div>
                <div className='img_box-01'>
                    <img src="images/menu03.jpg" alt="Tacos and Drink" title="we love Taco"  />
                </div>
                
            </div>
        </div>
        
    </section>
      
    </>
  )
}

export default Menu