import React from 'react';
import './contactus.css'


const Contactus = () => {
return <div className='contactUsContainer'>
            <img src=''/>
                    <div className="contactUsWrap">
                        <div className="left">
                            <div className="topLeft">
                                <h1 className='contactus-tile'>CONTACT US</h1>
                                <p className='contactus-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi id dolorum expedita.</p>
                            </div>
                            <form className="boottomLeft">
                               <div className="firstBlock block">
                               <input type="text" className='txt-nom txt' placeholder='Votre Nom' />
                                <input type="text" className='txt-prenom txt' placeholder='Votre Prenom' />
                               </div>

                                  <div className="secondBlock block">
                                  <input type="email" className='txt-email txt' placeholder='Votre email' />
                                </div>

                               <div className="thirdBlock block">
                               <input type="tel" className='txt-tel txt' placeholder='Votre Numero de telephone' />
                               </div>

                                <div className="fourthBlock block">
                                <input type="text" className='txt-agence txt' placeholder='Agence ou resau'/>
                                <input type="number" className='rdv-souhaite txt' placeholder='nombre de Rendez-vous souhautes' />
                                </div>

                                <textarea className='txt-besoin txt block' id="" cols="30" rows="10" placeholder='Besoin specifiques'></textarea>
                                <button type="submit" className='btn-submit block'>Envoyer</button>
                            </form>
                        </div>
                        <div className="right">
                            <h1 className='contactUsLogo'>logo</h1>
                            <p className='contactUsInfo'>(+212)6467646765</p>
                            <p className='contactUsInfo'>#####@gmail.com</p>
                            <p className='contactUsInfo'>Lundi - vendredi: 09h - 18h Samedi: 09h - 13h</p>
                        </div>
                    </div>
    </div>;
};

export default Contactus;
