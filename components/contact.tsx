import Container from "@/components/ui/container";
import NewsLetterForm from "./form-components/newsletter.form";

export default function Contact() {
  return (
    <Container className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-stone-500 md:mb-12 sm:text-xl">
            Stay up to date with the features, announcements, and exclusive
            insights. Feel free to sign up with your email.
          </p>

          {/* form here */}
          <NewsLetterForm/>

          <div className="mx-auto max-w-screen-sm text-sm text-left text-stone-500 newsletter-form-footer">
            We care about the protection of your data.{" "}
            <a
              href="#"
              className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </Container>
  );
}
