import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-background rounded-full flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=240&width=240"
                    alt="Profile"
                    className="w-56 h-56 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that make a difference. I
                specialize in modern web technologies and have a keen eye for
                design.
              </p>

              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while sketching out my next big idea.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-orange-500">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
