const ProjectsHeader = ({ onBack, viewType, onViewChange }) => (
    <div className="bg-[#f6f6f6] border-b border-[#e5e5e5] p-2 rounded-t-lg flex items-center space-x-4">
        <div className="flex space-x-2 px-2">
            <button 
                onClick={onBack}
                className="w-3 h-3 bg-[#ff5f57] rounded-full hover:opacity-80"
            />
            <div className="w-3 h-3 bg-[#febc2e] rounded-full" />
            <div className="w-3 h-3 bg-[#28c840] rounded-full" />
        </div>
        <div className="flex-1 text-center text-sm font-medium text-gray-600">
            Projects
        </div>
        <div className="flex space-x-2">
            <button 
                onClick={() => onViewChange('grid')}
                className={`p-1 rounded ${viewType === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
                </svg>
            </button>
            <button 
                onClick={() => onViewChange('list')}
                className={`p-1 rounded ${viewType === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
            </button>
        </div>
    </div>
);

export default ProjectsHeader;