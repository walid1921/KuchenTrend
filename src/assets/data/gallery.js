const images = [
  { id: 1, title: "Image 1", url: "/public/gallery/IMG_1.JPG" },
  { id: 2, title: "Image 2", url: "/public/gallery/IMG_2.JPG" },
  { id: 3, title: "Image 3", url: "/public/gallery/IMG_3.JPG" },
  { id: 4, title: "Image 4", url: "/public/gallery/IMG_4.JPG" },
  { id: 5, title: "Image 5", url: "/public/gallery/IMG_5.JPG" },
  { id: 6, title: "Image 6", url: "/public/gallery/IMG_6.JPG" },
  { id: 7, title: "Image 7", url: "/public/gallery/IMG_7.JPG" },
  { id: 8, title: "Image 8", url: "/public/gallery/IMG_8.JPG" },
  { id: 9, title: "Image 9", url: "/public/gallery/IMG_9.JPG" },
  {
    id: 10,
    title: "Image 10",
    url: "/public/gallery/IMG_10.JPG",
  },
  {
    id: 11,
    title: "Image 11",
    url: "/public/gallery/IMG_11.JPG",
  },
  {
    id: 12,
    title: "Image 12",

    url: "/public/gallery/IMG_12.JPG",
  },
  {
    id: 13,
    title: "Image 13",

    url: "/public/gallery/IMG_13.JPG",
  },
  {
    id: 14,
    title: "Image 14",

    url: "/public/gallery/IMG_14.JPG",
  },
  {
    id: 15,
    title: "Image 15",

    url: "/public/gallery/IMG_15.JPG",
  },
  {
    id: 16,
    title: "Image 16",
    url: "/public/gallery/IMG_16.JPG",
  },
  {
    id: 17,
    title: "Image 17",

    url: "/public/gallery/IMG_17.JPG",
  },
  {
    id: 18,
    title: "Image 18",

    url: "/public/gallery/IMG_18.JPG",
  },
  {
    id: 19,
    title: "Image 19",

    url: "/public/gallery/IMG_19.JPG",
  },
  {
    id: 20,
    title: "Image 20",

    url: "/public/gallery/IMG_20.JPG",
  },
  {
    id: 21,
    title: "Image 21",
    url: "/public/gallery/IMG_21.JPG",
  },
  {
    id: 22,
    title: "Image 22",

    url: "/public/gallery/IMG_22.JPG",
  },
  {
    id: 23,
    title: "Image 23",

    url: "/public/gallery/IMG_23.JPG",
  },
  {
    id: 24,
    title: "Image 24",

    url: "/public/gallery/IMG_24.JPG",
  },
  {
    id: 25,
    title: "Image 25",

    url: "/public/gallery/IMG_25.JPG",
  },
  {
    id: 26,
    title: "Image 26",
    url: "/public/gallery/IMG_26.JPG",
  },
  {
    id: 27,
    title: "Image 27",

    url: "/public/gallery/IMG_27.JPG",
  },
  {
    id: 28,
    title: "Image 28",

    url: "/public/gallery/IMG_28.JPG",
  },
  {
    id: 29,
    title: "Image 29",

    url: "/public/gallery/IMG_29.JPG",
  },
  {
    id: 30,
    title: "Image 30",

    url: "/public/gallery/IMG_30.JPG",
  },
  {
    id: 31,
    title: "Image 31",
    url: "/public/gallery/IMG_31.JPG",
  },
  {
    id: 32,
    title: "Image 32",

    url: "/public/gallery/IMG_32.JPG",
  },
  {
    id: 33,
    title: "Image 33",

    url: "/public/gallery/IMG_33.JPG",
  },
  {
    id: 34,
    title: "Image 34",

    url: "/public/gallery/IMG_34.JPG",
  },
  {
    id: 35,
    title: "Image 35",

    url: "/public/gallery/IMG_35.JPG",
  },
  {
    id: 36,
    title: "Image 36",
    url: "/public/gallery/IMG_36.JPG",
  },
  {
    id: 37,
    title: "Image 37",

    url: "/public/gallery/IMG_37.JPG",
  },
  {
    id: 38,
    title: "Image 38",

    url: "/public/gallery/IMG_38.JPG",
  },
  {
    id: 39,
    title: "Image 39",

    url: "/public/gallery/IMG_39.JPG",
  },
  {
    id: 40,
    title: "Image 40",

    url: "/public/gallery/IMG_40.JPG",
  },
  {
    id: 41,
    title: "Image 41",
    url: "/public/gallery/IMG_41.JPG",
  },
  {
    id: 42,
    title: "Image 42",

    url: "/public/gallery/IMG_42.JPG",
  },
  {
    id: 43,
    title: "Image 43",

    url: "/public/gallery/IMG_43.JPG",
  },
  {
    id: 45,
    title: "Image 45",

    url: "/public/gallery/IMG_45.JPG",
  },
  {
    id: 46,
    title: "Image 46",
    url: "/public/gallery/IMG_46.JPG",
  },
  {
    id: 47,
    title: "Image 47",

    url: "/public/gallery/IMG_47.JPG",
  },
  {
    id: 48,
    title: "Image 48",

    url: "/public/gallery/IMG_48.JPG",
  },
  {
    id: 49,
    title: "Image 49",

    url: "/public/gallery/IMG_49.JPG",
  },
  {
    id: 50,
    title: "Image 50",

    url: "/public/gallery/IMG_50.JPG",
  },
  {
    id: 51,
    title: "Image 51",
    url: "/public/gallery/IMG_51.JPG",
  },
  {
    id: 52,
    title: "Image 52",

    url: "/public/gallery/IMG_52.JPG",
  },
  {
    id: 53,
    title: "Image 53",

    url: "/public/gallery/IMG_53.JPG",
  },
  {
    id: 54,
    title: "Image 54",

    url: "/public/gallery/IMG_54.JPG",
  },
  {
    id: 55,
    title: "Image 55",

    url: "/public/gallery/IMG_55.JPG",
  },
  {
    id: 56,
    title: "Image 56",
    url: "/public/gallery/IMG_56.JPG",
  },
  {
    id: 57,
    title: "Image 57",

    url: "/public/gallery/IMG_57.JPG",
  },
  {
    id: 58,
    title: "Image 58",

    url: "/public/gallery/IMG_58.JPG",
  },
  {
    id: 59,
    title: "Image 59",

    url: "/public/gallery/IMG_59.JPG",
  },
  {
    id: 60,
    title: "Image 60",

    url: "/public/gallery/IMG_60.JPG",
  },
  {
    id: 61,
    title: "Image 61",
    url: "/public/gallery/IMG_61.JPG",
  },
  {
    id: 62,
    title: "Image 62",

    url: "/public/gallery/IMG_62.JPG",
  },
];

export default images;
