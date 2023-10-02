import { styles } from "@/app/styles/style";
import React, { FC, useState } from "react";
import { IoImages } from "react-icons/io5";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseInfo: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);
  // const { data } = useGetHeroDataQuery("Categories", {});
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`${styles.label}`}
      >
        <div>
          <label htmlFor="name">Course Name</label>
          <input
            type="name"
            name="name"
            required
            value={courseInfo.name}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            id="name"
            placeholder="Enter your course name"
            className={`
          ${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-5">
          <label
            htmlFor="description"
            className={`${styles.label}`}
          >
            Course Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={8}
            placeholder="Write something amazing about your course..."
            className={`${styles.input} !h-min !py-2`}
            value={courseInfo.description}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
          ></textarea>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label
              htmlFor="price"
              className={`${styles.label}`}
            >
              Course Price
            </label>
            <input
              type="number"
              name="price"
              required
              value={courseInfo.price}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              id="price"
              placeholder="price"
              className={`
          ${styles.input}`}
            />
          </div>
          <div className="w-[50%]">
            <label
              htmlFor="estimated"
              className={`${styles.label} w-[50%]`}
            >
              Estimated Price (optional)
            </label>
            <input
              type="number"
              name="estimated"
              value={courseInfo.estimatedPrice}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
              }
              id="estimated"
              placeholder="Estimated Price"
              className={`
          ${styles.input}`}
            />
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label
              className={`${styles.label}`}
              htmlFor="tags"
            >
              Course Tags{" "}
              <span className="text-[10px]">(Saperate tags by comma ",")</span>
            </label>
            <input
              type="text"
              required
              name="tags"
              value={courseInfo.tags}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, tags: e.target.value })
              }
              id="tags"
              placeholder="Next 13, Socket io, tailwind css, LMS"
              className={`
          ${styles.input}`}
            />
          </div>
          <div className="w-[50%]">
            <label
              htmlFor="category"
              className={`${styles.label} w-[50%]`}
            >
              Course Categories
            </label>
            <select
              name="category"
              id="category"
              className={`${styles.input}`}
              value={courseInfo.category}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, categories: e.target.value })
              }
            >
              <option
                className={`${styles.selectOption}`}
                value=""
              >
                Select Category
              </option>
              {categories &&
                categories.map((item: any) => (
                  <option
                    className={`${styles.selectOption}`}
                    value={item.title}
                    key={item._id}
                  >
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label
              htmlFor="level"
              className={`${styles.label}`}
            >
              Course Level
            </label>
            <select
              name="level"
              className={`${styles.input}`}
              value={courseInfo.level}
              required
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              id="level"
            >
              <option
                className={`${styles.selectOption}`}
                value=""
              >
                Select Level
              </option>
              <option
                className={`${styles.selectOption}`}
                value="Beginner"
              >
                Beginner
              </option>
              <option
                className={`${styles.selectOption}`}
                value="Intermediate"
              >
                Intermediate
              </option>
              <option
                className={`${styles.selectOption}`}
                value="Expert"
              >
                Expert
              </option>
            </select>
          </div>
          <div className="w-[50%]">
            <label
              htmlFor="demoUrl"
              className={`${styles.label} w-[50%]`}
            >
              Demo Url
            </label>
            <input
              type="text"
              name="demoUrl"
              required
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              id="demoUrl"
              placeholder="eer74fd"
              className={`
          ${styles.input}`}
            />
          </div>
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-[#1d2d40] border-[#cecece] p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <img
                src={courseInfo.thumbnail}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="flex items-center justify-center p-2 gap-2 border border-dashed dark:border-[#1d2d40] border-[#cecece] w-full h-full">
                <IoImages className="text-[20px]" />
                <span className="text-black dark:text-white">
                  Drag and drop your thumbnail here or click to browse
                </span>
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <button
            type="submit"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseInfo;
