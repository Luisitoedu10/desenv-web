import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "./Button"; 

const ContactForm = () => {
  
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    

    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const [statusText, setStatusText] = useState(""); 
    const recaptchaRef = useRef<ReCAPTCHA>(null);

  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

      
        if (!isChallengeCompleted) {
            setStatusText("⚠️ Por favor, marque a caixa 'Não sou um robô'.");
            return; 
        }

        setStatusText("Enviando...");

        try {
            
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }), 
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar mensagem.");
            }

         
            setStatusText("✅ Mensagem enviada com sucesso!");
            setEmail("");
            setMessage("");
            
   
            setChallengeCompleted(false);
            recaptchaRef.current?.reset();

        } catch (error) {
            setStatusText("❌ Ocorreu um erro ao enviar. Tente novamente.");
            console.error(error);
        }
    }


    function handleCompleteChallenge(token: string | null) {
        if (!token) {
            setChallengeCompleted(false);
            return;
        }
        setChallengeCompleted(true);
        setStatusText(""); 
    }

  
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-group">
                <textarea
                    id="message"
                    placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>

         
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={"6LfwjjUtAAAAAPaC_k2uvK6Eag7Y7NnCvXDPQaXD"}
                    onChange={handleCompleteChallenge}
                />
            </div>

          
            {statusText && (
                <p style={{ 
                    textAlign: "center", 
                    marginTop: "1rem", 
                    fontWeight: "bold",
                    color: statusText.includes("⚠️") || statusText.includes("❌") ? "#ef4444" : "#22c55e" 
                }}>
                    {statusText}
                </p>
            )}

            
            <div className="btn-container">
                <Button text="Enviar" type="submit" />
            </div>
        </form>
    );
};

export default ContactForm;