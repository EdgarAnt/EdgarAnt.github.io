const ProjectCard = ({ project, onClick }) => (
    <div
        onClick={() => onClick(project)}
        className="group bg-white rounded-2xl p-5 hover:shadow-md transition-all cursor-pointer"
        style={{ minWidth: 160, minHeight: 180, maxWidth: 220 }}
    >
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-200">
                <div className="text-2xl filter drop-shadow-sm flex items-center justify-center">
                    {typeof project.icon === "string" ? (
                        <span>{project.icon}</span>
                    ) : (
                        project.icon
                    )}
                </div>
            </div>
            
            <span className="text-base font-semibold text-center text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1 w-full truncate overflow-hidden whitespace-nowrap block">
                {project.name}
            </span>
            <span className="text-sm text-gray-400 text-center leading-tight px-1 w-full overflow-hidden line-clamp-2 block" style={{ fontWeight: 400 }}>
                {project.type}
            </span>
        </div>
    </div>
);

export default ProjectCard;