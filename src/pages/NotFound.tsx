
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-accent/30 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Page Not Found</h1>
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2tpbmclMjBlcnJvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="404 Illustration"
            className="mx-auto h-48 object-cover rounded-lg"
          />
        </div>
        <p className="text-lg mb-8 text-muted-foreground">
          Oops! The page you are looking for seems to have gone missing from our menu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/menu">Browse Menu</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
