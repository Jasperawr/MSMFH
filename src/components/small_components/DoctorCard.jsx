import React from "react";

const DoctorCard = ({
  img,
  name,
  specializations = [],
  schedule = [],
  contact = {},
}) => {
  return (
    <div className="w-[1100px] h-[380px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex gap-5">
      <div className="w-[300px] h-full overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex pt-15">
        <div className="flex flex-col justify-start w-[350px]">
          <p className="text-[30px] font-medium">{name}</p>

          <p className=" text-gray-600 font-medium text-sm">Specialization</p>

          <div className="flex gap-2 mt-1 flex-wrap">
            {specializations.map((item) => (
              <span
                key={item}
                className="text-sm bg-green-100 text-green-700 px-3 rounded-full border border-green-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="font-medium text-gray-500 mb-3 text-sm">
              Clinic Schedule
            </p>

            {schedule.map((day, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold text-gray-600">{day.day}</p>
                <p className="text-gray-600 text-sm">{day.time}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-medium text-gray-500 mb-3 text-sm">Contact</p>

            <div className="mb-3">
              <p className="font-semibold text-gray-600">Phone</p>
              <p className="text-gray-600 text-sm">{contact.phone}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-600">Email</p>
              <p className="text-gray-600 text-sm">{contact.email}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-600">Viber</p>
              <p className="text-gray-600 text-sm">{contact.viber}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-600">Doctor's Hotline</p>
              <p className="text-gray-600 text-sm">{contact.hotline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
