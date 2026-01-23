import Button from './Button'
import Input from './Input'
import { useState } from "react";
import { supabase } from "../../supaBaseclient";

function Contacto() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from("contacts")
            .insert([{ email }]);

        setLoading(false);

        if (error) {
            alert("Error saving email");
        } else {
            alert("Email saved!");
            setEmail("");
        }
    }

    return (
        <div id='contacto' className="text-center mt-20">
            <form action="" onSubmit={handleSubmit}>
                <h1 className="  text-4xl md:text-5xl font-bold">Vamos a desarrollar juntos</h1>
                <p className="mt-10">Contactame, escribe tu correo y realicemos grandes proeyctos.</p>
                <div className="flex justify-center items-center mt-10 gap-10  ">
                    <Input placeholder="Introduce tu email" email={email} setEmail={setEmail} />
                    <Button text={loading ? "Sending..." : "Contact"} disabled={loading} />
                </div></form>
        </div>
    )

}

export default Contacto