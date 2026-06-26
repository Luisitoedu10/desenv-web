import { useState } from "react";
import { useEffect } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import ProfileImageOne from "../assets/cafu.jpeg";
import ProfileImageTwo from "../assets/the_rock.jpeg";
import ProfileImageThree from "../assets/pele.jpeg";
import ProfileImageFour from "../assets/jackie_chan.jpeg";
import Champion from "../assets/champion.svg";
import Check from "../assets/Green_check.svg";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/button.css";
import "../styles/hero.css";
import "../styles/index.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/form.css";
import HeroRectangleOne from "../assets/images/rectangleOne.svg";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import Card from "../components/Card";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    // Valores para capturar dados dos inputs
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function sendContactEmail() {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                message,
            }),
        });

        if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            throw new Error(body.error ?? "Erro ao enviar mensagem.");
        }
    }

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img
                        src={Logo}
                        alt="Logo LuisFotos"
                        width={220}
                        height={80}
                    />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">
                                Login
                            </a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    setShowMobileMenu(
                                                        !showMobileMenu,
                                                    )
                                                }
                                                href="#"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    setShowMobileMenu(
                                                        !showMobileMenu,
                                                    )
                                                }
                                                href="#solution"
                                            >
                                                Soluções
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    setShowMobileMenu(
                                                        !showMobileMenu,
                                                    )
                                                }
                                                href="#testimonials"
                                            >
                                                Depoimentos
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    setShowMobileMenu(
                                                        !showMobileMenu,
                                                    )
                                                }
                                                href="#pricing"
                                            >
                                                Preços
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    setShowMobileMenu(
                                                        !showMobileMenu,
                                                    )
                                                }
                                                href="#contact"
                                            >
                                                Contato
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    setShowMobileMenu(false)
                                                }
                                                href="#login"
                                                className="mobile-login-btn"
                                            >
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                    <span
                                        onClick={() =>
                                            setShowMobileMenu(!showMobileMenu)
                                        }
                                        className="btn-wrapper"
                                    >
                                        <img
                                            src={Close}
                                            alt="ícone fechar menu"
                                            width={24}
                                            height={24}
                                        />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span
                                onClick={() =>
                                    setShowMobileMenu(!showMobileMenu)
                                }
                                className="btn-wrapper"
                            >
                                <img
                                    src={Menu}
                                    alt="ícone menu"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        )}
                    </div>
                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img
                        src={HeroRectangleTwo}
                        alt="Retangulo um tela inicial"
                    />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Bem Vindo</p>
                    <h1>Registrando o presente para o seu futuro.</h1>
                    <p>
                        O mundo muda a cada segundo, mas uma grande fotografia
                        mantém a essência daquele instante intacta. Deixe-nos
                        registrar a beleza do seu presente.
                    </p>
                    <div className="flex gap-1">
                        <span>
                            <Button text="Cadastre-se" />
                        </span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Com centenas de histórias já eternizadas e a confiança
                        de tantos clientes, a missão de{" "}
                        <strong>Luis Fotos</strong> continua a mesma:
                        transformar os seus momentos mais puros em memórias para
                        a vida toda.
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        iconeSrc={Champion}
                        iconeAlt="ícone campeão"
                        titulo="Fotografias premiadas"
                        descricao="Cada imagem que entregamos carrega a bagagem de um
                            olhar reconhecido e premiado internacionalmente. É a
                            certeza de que os momentos mais importantes da sua
                            vida serão eternizados com o máximo padrão de
                            excelência e prestígio mundial."
                    />

                    <Card
                        iconeSrc={Champion}
                        iconeAlt="ícone campeão"
                        titulo="Inovação"
                        descricao="Mais do que registrar momentos, nós criamos o futuro
                            da fotografia. Desenvolvemos um produto inovador que
                            une a sensibilidade artística a uma experiência
                            visual única, feita sob medida para quem busca
                            originalidade e exclusividade."
                    />

                    <Card
                        iconeSrc={Champion}
                        iconeAlt="ícone campeão"
                        titulo="Agilidade"
                        descricao="Fotografar com excelência é apenas metade do nosso
                            trabalho; a outra metade é garantir que você receba
                            suas memórias com uma velocidade incomparável. Um
                            serviço ágil, dinâmico e projetado para entregar
                            suas fotos em tempo recorde.."
                    />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>O que dizem nossos clientes</h2>
                    </span>
                    <p>
                        Nossas lentes já registraram sorrisos, lágrimas de
                        alegria e momentos inesquecíveis. Deixe os depoimentos
                        de quem já viveu a experiência{" "}
                        <strong>Luis Fotos</strong> mostrarem o carinho e a
                        qualidade que colocamos em cada ensaio.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            imagemPerfil={ProfileImageOne}
                            cargo="Ex-Jogador"
                            nome="Cafú"
                            quantidadeEstrelas={5}
                            testemunho="As fotos do meu casamento superaram todas as expectativas! O olhar do Luis conseguiu captar a verdadeira essência do nosso amor. Trabalho impecável e entrega super rápida."
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageTwo}
                            cargo="Ator"
                            nome="Dwayne Johnson"
                            quantidadeEstrelas={5}
                            testemunho="Profissionalismo do início ao fim. As fotos da minha formatura ficaram incríveis, com uma edição perfeita que fugiu totalmente do padrão clichê. Muito satisfeito!"
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageThree}
                            cargo="Ex-Jogador"
                            nome="Pelé"
                            quantidadeEstrelas={4}
                            testemunho="Fizemos o ensaio de família e foi super divertido e leve. O resultado final me emocionou muito, teremos essas memórias lindas guardadas para sempre. Recomendo de olhos fechados!"
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageFour}
                            cargo="Lutador"
                            nome="Jackie Chan"
                            quantidadeEstrelas={5}
                            testemunho="Precisava de fotos profissionais para o meu perfil e o resultado foi fantástico. A iluminação, a direção de poses... tudo me fez sentir muito confiante. Ajudou muito minha marca pessoal."
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageOne}
                            cargo="Ex-Jogador"
                            nome="Cafú"
                            quantidadeEstrelas={5}
                            testemunho="As fotos do meu casamento superaram todas as expectativas! O olhar do Luis conseguiu captar a verdadeira essência do nosso amor. Trabalho impecável e entrega super rápida."
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageTwo}
                            cargo="Ator"
                            nome="Dwayne Johnson"
                            quantidadeEstrelas={5}
                            testemunho="Profissionalismo do início ao fim. As fotos da minha formatura ficaram incríveis, com uma edição perfeita que fugiu totalmente do padrão clichê. Muito satisfeito!"
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageThree}
                            cargo="Ex-Jogador"
                            nome="Pelé"
                            quantidadeEstrelas={4}
                            testemunho="Fizemos o ensaio de família e foi super divertido e leve. O resultado final me emocionou muito, teremos essas memórias lindas guardadas para sempre. Recomendo de olhos fechados!"
                        />
                        <TestimonialCard
                            imagemPerfil={ProfileImageFour}
                            cargo="Lutador"
                            nome="Jackie Chan"
                            quantidadeEstrelas={5}
                            testemunho="Precisava de fotos profissionais para o meu perfil e o resultado foi fantástico. A iluminação, a direção de poses... tudo me fez sentir muito confiante. Ajudou muito minha marca pessoal."
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos pacotes</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Ensaio Essencial</h3>
                            <p>
                                Perfeito para renovar suas fotos de perfil ou
                                registrar um momento rápido e especial.
                            </p>
                        </span>
                        <h2>R$ 299</h2>
                        <Button text="Agendar data" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img
                                src={Check}
                                alt="ícone check"
                                width={24}
                                height={24}
                            />
                            <p>1 hora de duração</p>
                        </span>
                        <span className="features">
                            <img
                                src={Check}
                                alt="ícone check"
                                width={24}
                                height={24}
                            />
                            <p>Galeria digital privativa</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>MAIS ESCOLHIDO</p>
                        </span>
                        <span className="plan">
                            <h3>Ensaio Premium</h3>
                            <p>
                                A experiência completa para eternizar sua
                                história com todos os detalhes e sem pressa.
                            </p>
                        </span>
                        <span className="price">
                            <h2>R$ 799</h2>
                            <p>/ensaio</p>
                        </span>
                        <Button text="Agendar data" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img
                                src={Check}
                                alt="ícone check"
                                width={24}
                                height={24}
                            />
                            <p>Até 3 horas de duração</p>
                        </span>
                        <span className="features">
                            <img
                                src={Check}
                                alt="ícone check"
                                width={24}
                                height={24}
                            />
                            <p>50 fotos com edição fina</p>
                        </span>
                        <span className="features">
                            <img
                                src={Check}
                                alt="ícone check"
                                width={24}
                                height={24}
                            />
                            <p>Até 3 trocas de look</p>
                        </span>
                    </div>
                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <span className="subtitle">Fale Conosco</span>
                    <h2>Vamos eternizar sua história?</h2>
                    <p>
                        Preencha os dados abaixo e retornaremos com um orçamento
                        personalizado.
                    </p>
                </header>

                <div className="contact-content">
                    <form onSubmit={sendContactEmail} className="contact-form">
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

                        <div className="btn-container">
                            <Button text="Enviar" type="submit" />
                        </div>
                    </form>
                    <ContactForm />
                </div>
            </section>
            <footer id="footer">
                <div className="container footer-top">
                    <div className="footer-brand">
                        <img
                            src={Logo}
                            alt="Logo LuisFotos"
                            width={220}
                            height={80}
                        />
                        <div className="social-links">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">YouTube</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Empresa</h4>
                        <ul>
                            <li>
                                <a href="#">Sobre nós</a>
                            </li>
                            <li>
                                <a href="#">Faça parte do time</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li>
                                <a href="#">Marketing</a>
                            </li>
                            <li>
                                <a href="#">Análise de dados</a>
                            </li>
                            <li>
                                <a href="#">Boot discord</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Recursos</h4>
                        <ul>
                            <li>
                                <a href="#">IOS & Android</a>
                            </li>
                            <li>
                                <a href="#">Teste a Demo</a>
                            </li>
                            <li>
                                <a href="#">Clientes</a>
                            </li>
                            <li>
                                <a href="#">API</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        Feito com amor na aula de Programação Web &copy; 2026 -
                        Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </>
    );
}
