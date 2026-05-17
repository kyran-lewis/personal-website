import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  icon: string;
  title: string;
  description: string;
}

function SmallCard({ icon, title, description }: Props) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md mr-4">
      <div className="text-amber-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default SmallCard;
