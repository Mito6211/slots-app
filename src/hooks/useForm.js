import { useState } from "react";

const useForm = () => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value);
    }

    return [formData, setFormData, handleChange];

}

export default useForm;