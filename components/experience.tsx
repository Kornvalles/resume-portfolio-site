import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces. Improved application performance by 40%.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Firebase"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Labs",
      location: "Austin, TX",
      period: "2019 - 2020",
      description:
        "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-orange-500">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
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
