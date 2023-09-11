import Button from "../components/Button";
import BgImg from "../components/BgImg";

export default function NotFound() {
  return (
    <>
    <BgImg url={"./img/404.jpg"} />
      <main className="max-xs:mt-24">
        <div className="m-auto flex flex-col text-neutral-100 items-center">
          <h1 className="text-7xl font-extrabold">Oops!</h1>
          <h2 className="text-4xl font-semibold mt-4">404 Page Not Found</h2>
          <p className="text-2xl font-light mb-4">
            The page you are looking for does not exist.
          </p>
          <Button to="/home" className="text-xl px-8">
            Go to HomePage
          </Button>
        </div>
      </main>
    </>
  );
}
