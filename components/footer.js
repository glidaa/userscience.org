import Container from "./container";
import FooterLinks from "./footerlinks";
export default function Footer() {
  return (
    <footer className="bg-accent-1 ">
      <Container>
        <div className=" flex flex-row items-center justify-center">
          <h3 className="flex flex-row items-center justify-center text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-2/3">
            {" "}
            For more information contact us <img
              src={"/assets/michael.png"}
              className="w-15 h-15 rounded-full mr-4"
              alt={"michael.png"}
            /><a href="https://www.linkedin.com/in/michaelcastleman/">Michael Castleman</a>
          </h3>
        </div>
        <FooterLinks />
      </Container>
    </footer>
  );
}
