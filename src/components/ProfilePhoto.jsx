import React from "react";

export default function ProfilePhoto({ size = "5rem", url, name, className }) {
    return <img className={`${className} aspect-square object-cover rounded-full shadow-md`} src={url} alt={`Photo of ${name}`} />;
}
