const SearchInput = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<div className="input-box">
			<label htmlFor="searchInput">
				<i className={`fa-solid fa-magnifying-glass ${!isDarkMode && 'dark-mode'}`}></i>
			</label>
			<input
				className={`search-input ${!isDarkMode && 'dark-mode'}`}
				id="searchInput"
				type="text"
				placeholder="Search for a country..."
			/>
		</div>
	)
}
export default SearchInput
