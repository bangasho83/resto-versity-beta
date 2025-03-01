import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';

export default function RestaurantLMS() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const employees = [
    { name: 'John Doe', role: 'Cook' },
    { name: 'Sarah Lee', role: 'Cashier' },
    { name: 'Mike Brown', role: 'Shift Manager' },
    { name: 'Emily Davis', role: 'Grill Operator' },
    { name: 'David Wilson', role: 'Cleaner' },
  ];

  const courses = [
    {
      title: 'Big Mac Mastery',
      description: 'Learn how to make the perfect Big Mac.',
      lessons: [
        {
          number: 1,
          title: 'Introduction to the Big Mac',
          video: 'https://www.example.com/video1.mp4',
          content: [
            'Overview of the Big Mac',
            'Ingredients and portions',
            'Why consistency is important',
          ],
        },
        {
          number: 2,
          title: 'Grilling the Patties',
          video: 'https://www.example.com/video2.mp4',
          content: [
            'Proper grill temperature',
            'Flipping techniques',
            'Cooking duration',
          ],
        },
        {
          number: 3,
          title: 'Assembling the Big Mac',
          video: 'https://www.example.com/video3.mp4',
          content: [
            'Layering ingredients in order',
            'Applying the sauce correctly',
            'Ensuring a balanced structure',
          ],
        },
        {
          number: 4,
          title: 'Wrapping & Presentation',
          video: 'https://www.example.com/video4.mp4',
          content: [
            'Proper wrapping technique',
            'Serving presentation',
            'Quality control tips',
          ],
        },
      ],
      quiz: {
        title: 'Big Mac Mastery Quiz',
        questions: [
          {
            question: 'What is the correct order of ingredients?',
            options: [
              'Bun, Lettuce, Patty, Sauce',
              'Bun, Sauce, Patty, Lettuce',
              'Bun, Patty, Sauce, Lettuce',
              'Bun, Sauce, Lettuce, Patty',
            ],
          },
          {
            question: 'How much sauce is applied to each layer?',
            options: [
              '1 teaspoon',
              '2 teaspoons',
              '1 tablespoon',
              '2 tablespoons',
            ],
          },
          {
            question: 'What type of bun is used?',
            options: [
              'Sesame seed bun',
              'Whole wheat bun',
              'Regular bun',
              'Brioche bun',
            ],
          },
          {
            question: 'How many patties are in a Big Mac?',
            options: ['1', '2', '3', '4'],
          },
          {
            question: 'What is the signature sauce called?',
            options: [
              'Mac Sauce',
              'Special Sauce',
              'House Sauce',
              'Secret Sauce',
            ],
          },
        ],
      },
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Restaurant LMS Dashboard</h1>
      <Tabs defaultValue="employees">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="employees">
          <div className="space-y-4">
            {employees.map((employee, index) => (
              <Card key={index} className="p-4">
                <h2 className="text-lg font-semibold">{employee.name}</h2>
                <p className="text-sm text-gray-500">Role: {employee.role}</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses">
          {showQuiz ? (
            <div>
              <h2 className="text-lg font-semibold">{courses[0].quiz.title}</h2>
              <div className="space-y-4 mt-4">
                {courses[0].quiz.questions.map((q, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="text-md font-semibold">
                      {index + 1}. {q.question}
                    </h3>
                    {q.options.map((option, i) => (
                      <label key={i} className="block mt-2">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </Card>
                ))}
              </div>
              <Button onClick={() => setShowQuiz(false)} className="mt-4">
                Back to Course
              </Button>
            </div>
          ) : selectedLesson ? (
            <div>
              <h2 className="text-lg font-semibold">
                Lesson {selectedLesson.number}: {selectedLesson.title}
              </h2>
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                <video controls className="w-full h-full">
                  <source src={selectedLesson.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <ul className="list-disc ml-6 mt-4">
                {selectedLesson.content.map((point, i) => (
                  <li key={i} className="text-sm text-gray-500">
                    {point}
                  </li>
                ))}
              </ul>
              <Button onClick={() => setSelectedLesson(null)} className="mt-4">
                Back to Lessons
              </Button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold">{courses[0].title}</h2>
              <p className="text-sm text-gray-500">{courses[0].description}</p>
              <div className="space-y-4 mt-4">
                {courses[0].lessons.map((lesson, i) => (
                  <Card
                    key={i}
                    className="p-4 cursor-pointer"
                    onClick={() => setSelectedLesson(lesson)}
                  >
                    <h3 className="text-md font-semibold">
                      Lesson {lesson.number}: {lesson.title}
                    </h3>
                  </Card>
                ))}
              </div>
              <Button onClick={() => setShowQuiz(true)} className="mt-4">
                Take Quiz
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
