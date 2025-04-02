const SectionHeader = ({ section } : { section: string }) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return <h1 className="text-xl font-bold">{capitalizeFirstLetter(section)}</h1>
}

export default SectionHeader;