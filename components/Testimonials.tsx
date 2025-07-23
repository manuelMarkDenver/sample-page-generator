import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    "Best service ever!",
    "Helped us buy our dream home!",
    "Highly recommended!",
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 tracking-tight">
        What Clients Say
      </h2>
      <div className="flex gap-6 overflow-x-auto justify-center px-2">
        {testimonials.map((text, i) => (
          <Card
            key={i}
            className="min-w-[300px] bg-gray-50 hover:bg-white transition shadow-md hover:shadow-xl rounded-xl flex flex-col justify-between"
          >
            <CardContent className="p-6">
              <p className="text-gray-800 italic">"{text}"</p>
              <p className="mt-6 font-semibold text-gray-600 text-right">
                – Client {i + 1}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
