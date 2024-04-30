import { useState } from "react";
import { legacy_createStore as createStore } from "redux";

export default function Courses() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const initialState = [
    {
      name: "Course 01",
      description: "Lorem Ipsum",
      dateAdded: "Tue 30 Apr 2024",
    },
  ];
  const [courses, setCourses] = useState(initialState);

  function courseReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_COURSE":
        return [...state, action.payload];
      case "REMOVE_COURSE":
        return state.filter((course) => course.name !== action.payload.name);
      default:
        return state;
    }
  }

  let store = createStore(courseReducer);
  const date = new Date().toDateString();

  const addCourse = () => {
    const newCourse = {
      name: name,
      description: description,
      dateAdded: date,
    };
    store.dispatch({
      type: "ADD_COURSE",
      payload: newCourse,
    });
    setCourses([...courses, newCourse]);
    resetInputs();
  };

  const removeCourse = (courseName) => {
    store.dispatch({
      type: "REMOVE_COURSE",
      payload: { name: courseName },
    });
    setCourses(courses.filter((course) => course.name !== courseName));
  };

  const resetInputs = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div>
      <div>
        <h1>Add a new course</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Input name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="name">Description:</label>
          <input
            type="text"
            placeholder="Input description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button type="button" onClick={addCourse}>
            Add
          </button>
        </form>
      </div>

      <div>
        <h2>Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr key={course.name}>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.dateAdded}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeCourse(course.name)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
