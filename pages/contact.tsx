import Link from "next/link";
import Layout from "@layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="">Get in touch!</h1>
        <p>
          Just drop me a line at{" "}
          <Link href="mailto:sh@digitaldiver.me">
            <a>sh@digitaldiver.me</a>
          </Link>{" "}
        </p>
      </div>
    </Layout>
  );
};

export default ContactPage;