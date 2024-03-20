'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';


export default function ImagePicker({ label, name }) {

    const imageInputRef = useRef();
    function handlePickClick() {
        imageInputRef.current.click();
    }
    const [pickedImage, setPickedImage] = useState();

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null)
            return;
        }

        //convert the selected file into a data url
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);

    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image Picked.</p>}
                {pickedImage && <Image src={pickedImage} fill alt='Image Selected By User.' />}
            </div>
            <input
                className={classes.input}
                type='file'
                id='image'
                accept='image/png, image/jpg, image/jpeg'
                name={name}
                ref={imageInputRef}
                onChange={handleImageChange}
                required />

            <button className={classes.button} type='button' onClick={handlePickClick}>Pick Image</button>
        </div>
    </div>
}