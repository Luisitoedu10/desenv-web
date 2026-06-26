import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const [message, setMessage] = useState("");
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const isNullOrEmpty = (value: string) =>
        value === null || value.trim() === "";

    const resetFields = () => setFormData({ name: "", email: "" });

    const handleSendEmail = async () => {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: formData.email,
                message: formData.name,
            }),
        });

        if (!response.ok) {
            throw new Error("Erro ao enviar mensagem.");
        }
    };

    function isValidForm() {
        const isValidFields =
            !isNullOrEmpty(formData.name) && !isNullOrEmpty(formData.email);
        return isValidFields && isChallengeCompleted;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!isValidForm()) {
            setMessage("Por favor, preencha os campos e o reCAPTCHA.");
            return;
        }

        setChallengeCompleted(false);
        setMessage("Enviando...");

        try {
            await handleSendEmail();
            resetFields();
            recaptchaRef.current?.reset();
            setMessage("Mensagem enviada com sucesso!");
        } catch (error) {
            setMessage("Erro ao enviar a mensagem. Tente novamente.");
            console.error(error);
        }
    }

    function handleCompleteChallenge(token: string | null) {
        if (!token) {
            setChallengeCompleted(false);
            return;
        }

        setChallengeCompleted(true);
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </label>
            </div>
            <div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={"6LfwjjUtAAAAAPaC_k2uvK6Eag7Y7NnCvXDPQaXD"}
                    onChange={handleCompleteChallenge}
                />
            </div>
            <button type="submit">Enviar</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ContactForm;
