
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <section className="bg-av-purple-dark text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Subscribe to my Newsletter</h2>
          <p className="text-gray-200 mb-8">
            Stay updated with the latest informations, trends and resources in Artificial Intelligence.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-white/20 text-white placeholder:text-gray-300 border-white/30 focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-white text-av-purple-dark hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-300 mt-4">
            By subscribing, you agree to my Privacy Policy and consent to receive updates from me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
