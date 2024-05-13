import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGifts(category);
    // const [imgages, setImgages] = useState([]);
    // // Debido a que UseEffect no puede ser async, podemos usar una funcion externa
    // // en la que si usemos el asyn y llamar a esa funcion dentro del UseEffect
    // const fetchImages = async () => {
    //     const newImages = await getGifts(category);
    //     setImgages(newImages);
    // }
    // //Recibe una funcion, y el motivo por el que se deberia volver a ejecutar
    // useEffect(() => {
    //     fetchImages();
    //     //o tambien podemos usar el then para atrapar la promesa
    //     //getGifts(category).then((response => setImages(response))
    // }, []);
    // getGifts(category);
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {images.map((image) =>
                    <GifItem 
                     key={image.id}
                     //Se puede enviar el objeto completo y se identificara como props con el nombre y valor...
                     { ...image }/>
                )}
            </div>
        </>
    )
}
