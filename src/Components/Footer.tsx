const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="flex items-center justify-center text-center max-w-[60rem] pt-[1rem] text-[1rem] mt-[5rem] border-t border-gray-300 dark:border-t dark:border-gray-600">
        <p className="pt-[1rem]">
          © {year} Niño Austral | Credits to <a href="https://jzitnik.dev/en/about/">Jakub Žitník</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
