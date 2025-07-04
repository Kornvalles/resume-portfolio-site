import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Server, Smartphone } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "CMS",
        "Contentful",
        "Umbraco",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Node.js",
        "Express.js",
        "Serverless Functions",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
        "Docker",
        "PHP",
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Prototyping",
        "User Research",
        "Wireframing",
      ],
    },
    {
      title: "Mobile & Tools",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Git", "Vercel", "Firebase", "Jest", "Cypress"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-orange-500/10 rounded-full w-fit">
                    <div className="text-orange-500">{category.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
