// Para la vista de lista
const ProjectListItem = ({ project, onClick }) => (
    <div
        onClick={() => onClick(project)}
        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer"
    >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">{project.icon}</span>
        </div>
        <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700">{project.name}</h3>
            <p className="text-xs text-gray-400">{project.type}</p>
        </div>
        <span className="text-xs text-gray-400">{project.lastModified}</span>
    </div>
);

export default ProjectListItem;