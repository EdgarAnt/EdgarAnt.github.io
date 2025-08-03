const ProjectCard = ({ project, onClick }) => (
    <div
        onClick={() => onClick(project)}
        className="group bg-white rounded-2xl p-3 sm:p-4 lg:p-5 hover:shadow-md transition-all cursor-pointer w-full max-w-[180px] min-h-[140px] sm:max-w-[200px] sm:min-h-[160px] lg:max-w-[220px] lg:min-h-[180px] mx-auto"
    >
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-105 transition-all duration-200">
                <div className="text-lg sm:text-xl lg:text-2xl filter drop-shadow-sm flex items-center justify-center">
                    {typeof project.icon === "string" ? (
                        <span>{project.icon}</span>
                    ) : (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center overflow-hidden">
                            {project.icon}
                        </div>
                    )}
                </div>
            </div>
            
            <span className="text-base sm:text-base lg:text-lg font-semibold text-center text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1 w-full truncate overflow-hidden whitespace-nowrap block">
                {project.name}
            </span>
            <span className="text-xs sm:text-sm lg:text-sm text-gray-400 text-center leading-tight px-1 w-full overflow-hidden line-clamp-2 block" style={{ fontWeight: 400 }}>
                {project.type}
            </span>
        </div>
    </div>
);

export default ProjectCard;