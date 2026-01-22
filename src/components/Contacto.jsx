import Button from './Button'
import Input from './Input'
function Contacto() {

    return (
        <div className="text-center mt-20">
            <h1 className="  text-4xl md:text-5xl font-bold">Lets Develop together</h1>
            <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus debitis fugiat deserunt ducimus labore! Dolor a tempora vel nulla praesentium dignissimos, earum consequatur perferendis odio nesciunt aspernatur totam odit?</p>
            <div className="flex justify-center items-center mt-10 gap-10  ">
                <Input placeholder="Introduce tu email" />
                <Button text={"Contact"} />
            </div>
        </div>
    )

}

export default Contacto