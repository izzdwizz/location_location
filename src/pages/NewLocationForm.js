import { useRef } from 'react';
import Card from '../components/ui/Card'
import classes from './NewLocationForm.module.css';

function NewLocationForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    



    function SubmitHandler(event) {
      event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const locationData = {

            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

      props.onAddLocation(locationData);
    }

    return ( 

<Card>
    <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>

        <label htmlFor='title'> Location Name</label>
        <input type='text' required id='title' ref={titleInputRef} />
        </div>

        <div className={classes.control}>

            <label htmlFor='image'> Location Image</label>
            <input type='url' required id='image' ref={imageInputRef} />
         </div>

         <div className={classes.control}>

            <label htmlFor='address'> Location Address</label>
            <input type='text' required id='address' ref={addressInputRef} />

            <div className={classes.control}>

                    <label htmlFor='description'> Location Description</label>
                    <textarea  id='description' required rows='5' ref={descriptionInputRef} />
            </div>

            <div className={classes.actions}>

      
                    <button>Add Location</button>
            
            </div>       
          

                

         </div>

       
    </form>


</Card>





);

}

export default NewLocationForm;