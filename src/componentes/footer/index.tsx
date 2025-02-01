import "./style.scss";

type propsFooter = {
    text: string,
};


export default function Footer({text}: propsFooter) {
    return(
        <>
           <section className="footer">
                {text}
           </section>
        </>
    )
}