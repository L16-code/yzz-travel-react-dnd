import React, { memo, useCallback, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Activity } from "../types";
import "../styles/drag-drop.css";

const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
  // Extract transform values if present
  let transform = draggableStyle?.transform || "";

  // If dragging, add slight resistance to make it feel more natural
  if (isDragging && transform) {
    // Slightly reduce movement speed for more natural feeling (95% of original)
    const transformValues = transform.match(/translate\((.*?)px, (.*?)px\)/);
    if (transformValues && transformValues.length >= 3) {
      const x = parseFloat(transformValues[1]);
      const y = parseFloat(transformValues[2]);
      // Apply 95% movement to add slight resistance
      transform = `translate(${x * 0.95}px, ${y * 0.95}px)`;
    }
  }

  return {
    ...draggableStyle,
    transform,
    zIndex: isDragging ? 9999 : 1,
    opacity: isDragging ? 0.9 : 1,
    boxShadow: isDragging ? "0 8px 15px rgba(0,0,0,0.2)" : "none",
    // Add slight rotation to make drag feel more natural
    transformOrigin: "center",
    // Use hardware acceleration
    willChange: isDragging ? "transform" : "auto",
  };
};

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  // State for mobile menu toggle
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      target.onerror = null;
      target.src = `https://placehold.co/80x80/0d6efd/ffffff?text=${activity.name.charAt(
        0
      )}`;
    },
    [activity.name]
  );

  // Toggle mobile menu
  const toggleMobileMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMobileMenu((prev) => !prev);
  }, []);

  return (
    <Draggable draggableId={activity.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`card mb-4 position-relative ${
            snapshot.isDragging ? "border-primary shadow dragging" : "border"
          } transition activity-card`}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          id={activity.id}
        >
          <div
            className="position-absolute start-4 top-50 translate-middle-y badge rounded-circle bg-primary text-white p-2 shadow"
            style={{
              width: "30px",
              height: "30px",
              left: "40px",
              top: "57px !important",
              zIndex: 1,
            }}
          >
            <span className="fw-bold">{index + 1}</span>
          </div>

          <div className="card-body pe-3 position-relative">
            {/* Desktop and Mobile Layout with Responsive Design */}
            <div className="row">
              {/* Left Column - Image and Breadcrumb Icon */}
              <div className="col-md-3 col-4">
                <div className="d-flex flex-row-reverse flex-md-row-reverse align-items-center gap-2 gap-md-3">
                  <img
                    src={`https://source.unsplash.com/80x80/?${encodeURIComponent(
                      activity.name.toLowerCase().replace(/\s+/g, "-")
                    )},travel`}
                    alt={activity.name}
                    className="rounded-3 object-fit-cover"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                    onError={handleImageError}
                  />
                  <div className="text-secondary d-md-block">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 6H6m12 4H6m12 4H6m12 4H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="col-md-9 col-8">
                <div className="d-flex flex-column h-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="fs-5 fs-md-5 fw-bold mb-0 lh-sm flex-grow-1 text-truncate">
                      {activity.name}
                    </h3>

                    {/* Desktop Actions */}
                    <div className="d-none d-md-flex justify-content-end gap-2">
                      <button
                        className="btn btn-sm btn-light"
                        aria-label="View Location"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-secondary"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                        </svg>
                      </button>
                      <button
                        className="btn btn-sm btn-light"
                        aria-label="Edit Activity"
                      >
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                          />
                        </svg>

                        {/* <img
                            src={`${process.env.PUBLIC_URL}/commonSvg/attachment-pin-icon.svg`}
                            alt="Attachment Icon"
                            className="attachment-icon"
                          /> */}
                      </button>
                      <button
                        className="btn btn-sm btn-light text-danger"
                        aria-label="Delete Activity"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Actions - Three Dots Menu */}
                    <div className="d-md-none position-relative">
                      <button
                        className="btn btn-sm btn-light"
                        onClick={toggleMobileMenu}
                        aria-label="Show Options"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-secondary"
                        >
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </button>

                      {/* Mobile Menu Dropdown */}
                      {showMobileMenu && (
                        <div
                          className="position-absolute end-0 top-100 mt-1 bg-white shadow rounded p-2 z-1"
                          style={{ minWidth: "150px" }}
                        >
                          <button
                            className="btn btn-sm d-flex align-items-center w-100 text-start py-2"
                            aria-label="View Location"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-secondary me-2"
                            >
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                            View Location
                          </button>
                          <button
                            className="btn btn-sm d-flex align-items-center w-100 text-start py-2"
                            aria-label="Add Attachment"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-secondary me-2"
                            >
                              <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
                            </svg>
                            Add Attachment
                          </button>
                          <button
                            className="btn btn-sm d-flex align-items-center w-100 text-start py-2 text-danger"
                            aria-label="Delete Activity"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-danger me-2"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                            Delete
                          </button>
                          <button
                            className="btn btn-sm d-flex align-items-center w-100 text-start py-2"
                            aria-label="Edit Activity"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-secondary me-2"
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            </svg>
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-secondary">
                    <span className="text-warning me-1">★</span>
                    <span className="fw-semibold me-2">{activity.rating}</span>
                    <span className="text-muted">
                      ({activity.reviewCount.toLocaleString()})
                    </span>
                  </div>

                  {/* Description section */}
                  <div className="d-flex align-items-start mt-2">
                    <p className="text-secondary small mb-0 line-clamp-2 line-clamp-md-3 flex-grow-1">
                      {activity.description}
                    </p>
                    <button
                      className="btn btn-sm btn-light text-danger ms-2 d-none d-md-block"
                      aria-label="Edit Activity"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-secondary"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ActivityCard;
