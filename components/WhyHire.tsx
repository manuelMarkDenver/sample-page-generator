import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Home, Handshake } from "lucide-react";

export function WhyHire() {
  const stats = [
    {
      title: "Years of Experience",
      value: "10+",
      icon: Briefcase,
      color: "text-blue-600",
    },
    {
      title: "Properties Sold",
      value: "150+",
      icon: Home,
      color: "text-green-600",
    },
    {
      title: "Happy Clients",
      value: "98%",
      icon: Handshake,
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6 tracking-tight">
        Why Hire a Real Estate Agent?
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-14 text-gray-700">
        An expert agent helps you navigate the complexities of the market,
        secure the best deal, and minimize stress. With negotiation expertise,
        local knowledge, and legal insights, we’re here to make buying or
        selling smooth and successful.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stats.map(({ title, value, icon: Icon, color }, i) => (
          <Card
            key={i}
            className="text-left shadow-sm hover:shadow-md transition"
          >
            <CardContent className="flex items-center gap-5 p-6">
              <div className={`p-3 bg-white border rounded-full ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-gray-600">{title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
