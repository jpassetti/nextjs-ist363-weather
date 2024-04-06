const openWeatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const people = [
  {
    name: { first: "Ava", last: "Smith" },
    jobTitle: "Software Engineer",
    company: "InnoTech",
    slug: "ava-smith",
  },
  {
    name: { first: "Liam", last: "Johnson" },
    jobTitle: "Product Manager",
    company: "InnoTech",
    slug: "liam-johnson",
  },
  {
    name: { first: "Olivia", last: "Williams" },
    jobTitle: "UX Designer",
    company: "InnoTech",
    slug: "olivia-williams",
  },
  {
    name: { first: "Noah", last: "Brown" },
    jobTitle: "Data Scientist",
    company: "InnoTech",
    slug: "noah-brown",
  },
  {
    name: { first: "Emma", last: "Jones" },
    jobTitle: "Cloud Solutions Architect",
    company: "InnoTech",
    slug: "emma-jones",
  },
  {
    name: { first: "Oliver", last: "Garcia" },
    jobTitle: "DevOps Engineer",
    company: "InnoTech",
    slug: "oliver-garcia",
  },
  {
    name: { first: "Sophia", last: "Miller" },
    jobTitle: "Cybersecurity Specialist",
    company: "InnoTech",
    slug: "sophia-miller",
  },
  {
    name: { first: "Isabella", last: "Davis" },
    jobTitle: "Network Administrator",
    company: "InnoTech",
    slug: "isabella-davis",
  },
  {
    name: { first: "Mason", last: "Rodriguez" },
    jobTitle: "IT Support Technician",
    company: "InnoTech",
    slug: "mason-rodriguez",
  },
  {
    name: { first: "Mia", last: "Martinez" },
    jobTitle: "Frontend Developer",
    company: "InnoTech",
    slug: "mia-martinez",
  },
];

export function getPeople() {
  return people;
}

export async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=13244&appid=${openWeatherApiKey}&units=imperial`
  );
  const data = await response.json();
  return data;
}

export async function getWeatherDataByLatLon(position) {
  const { latitude, longitude } = position.coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=imperial`
  );
  const data = await response.json();
  return data;
}

export const getGeoLocation = () => {
  return new Promise((resolve, reject) => {
    // if pizzas are available
    if ("geolocation" in navigator) {
      //resolve();
      // two functions are required to get the location
      // success function and error function
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        () => {
          reject("User denied geolocation permission");
        }
      );
    } else {
      // if no pizzas are available
      reject("Geolocation is not available");
    }
  });
};
