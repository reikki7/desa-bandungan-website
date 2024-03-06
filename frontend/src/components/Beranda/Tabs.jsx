import { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex bg-white border-b border-gray-300">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${activeTab === child.props.label
              ? "border-b-2 border-green-700"
              : "border-b-2"
              } duration-200 flex-1 text-gray-700 py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return <div label={label}>{children}</div>;
};
export { Tabs, Tab };
