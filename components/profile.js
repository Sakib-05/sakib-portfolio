import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Profile() {
  return (
    <div className="">
      <Tabs
        defaultValue="profile"
        className="w-[500px] flex flex-col justify-center items-center"
      >
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>

            <CardContent>
              As a graduate BSc Computer Science student from City University, I
              am passionate about full-stack application development. Recently,
              I have also begun exploring artificial intelligence and its
              potential in modern technology. My goal is to utilise my skills to
              design and develop impactful solutions to challenging problems.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>

            <CardContent>
              I have graduated with a First Class degree in Computer Science
              from City University London, where I gained a solid foundation in
              programming, algorithms, and software development. My coursework
              included subjects such as data structures, desktop application
              development, and database management.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hobbies">
          <Card>
            <CardHeader>
              <CardTitle>Hobbies</CardTitle>
            </CardHeader>

            <CardContent>
              At the moment I am practicing Data Strucutures & algorithms daily,
              learning about System Design, and developing side projects. In my
              free time, I practice calisthenics, manage my own investment
              portfolio, and exploring new technologies.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
