import { useEffect, useState } from "react";
import { getGifts } from "../helpers/GetGifs";
//Los hooks son basicamente funciones que retornan elementos
//se diferencian de los funcional components debido a que no retorna jsx
export const useFetchGifts = (category) => {
    const [images, setImgages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    // Debido a que UseEffect no puede ser async, podemos usar una funcion externa
    // en la que si usemos el asyn y llamar a esa funcion dentro del UseEffect
    const fetchImages = async () => {
        const newImages = await getGifts(category);
        setImgages(newImages);
        setIsLoading(false);
    }
    //Recibe una funcion, y el motivo por el que se deberia volver a ejecutar
    useEffect(() => {
        fetchImages();
        //o tambien podemos usar el then para atrapar la promesa
        //getGifts(category).then((response => setImages(response))
    }, []);
    return {
        images: images,
        isLoading 
    }
}
