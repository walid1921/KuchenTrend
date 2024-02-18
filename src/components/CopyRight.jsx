function CopyRight() {
  return (
    <section className="section mb-[20px]">
      <p className="text-center text-[20px] text-slate-500">
        &copy; Copyright 2024 by{" "}
        <a
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security reasons
          href="https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ=="
          className="underline hover:text-primary transition-all ease-in-out duration-150 cursor-pointer"
        >
          @dev.n.des
        </a>
      </p>
    </section>
  );
}

export default CopyRight;
