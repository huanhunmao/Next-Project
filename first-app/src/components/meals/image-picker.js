'use client'

import classes  from './image-picker.module.css'
import {useRef, useState}  from 'react'
import Image from 'next/image'

export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef()

    function handlePickClick(){
        imageInput.current.click()
    }

    function handleInputChanged(event) {
        const file = event.target.files[0];
    
        if (!file) {
            setPickedImage(null);
            return;
        }
    
        if (!file.type.startsWith('image/')) {
            // 文件类型不是图像
            console.error('请选择图像文件');
            return;
        }
    
        const fileReader = new FileReader();
    
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
    
        fileReader.onerror = (error) => {
            console.error('文件读取失败:', error);
        };
    
        fileReader.readAsDataURL(file);
    }
    

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && <img style={{width:'10rem', height:'10rem'}} src={pickedImage} alt='The image selected by the user' />

}
                </div>
                <input
                className={classes.input}
                type='file'
                id={name}
                accept='image/png, image/jpeg'
                name={name}
                ref={imageInput}
                onChange={handleInputChanged}
                />
                <button className={classes.button} type='button' onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    )
}