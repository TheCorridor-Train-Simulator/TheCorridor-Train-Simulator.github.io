import React, { useState, useMemo } from 'react';
import './APIDocumentation.scss';

type CodeElementType = 'class' | 'struct' | 'enum' | 'function' | 'namespace';

interface CodeElement {
  id: string;
  library: string;
  namespace: string;
  type: CodeElementType;
  name: string;
  brief: string;
  description: string;
  signature?: string;
  members?: string[];
  example?: string;
  filePath: string;
  lineStart?: number;
  lineEnd?: number;
}

// RailNex API Documentation - Populated from Doxygen comments in the codebase
const API_DOCUMENTATION: CodeElement[] = [
  // RailVehicle Library
  {
    id: 'railvehicle-base-class',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'RailVehicle',
    brief: 'Base class for all rail vehicles in the simulator',
    description: 'Abstract base class providing common functionality for locomotives, freight cars, passenger cars, and other rolling stock. Handles core vehicle properties and behavior.',
    signature: 'class RAILVEHICLE_API RailVehicle',
    members: [
      'virtual void Run() = 0',
      'bool EmergencyReservoirPresent',
      'bool HasHandBrake',
      'bool HasAuxiliaryReservoir',
      'std::string DesignationName_',
      'int32_t RunningNumber_',
      'std::string Model_'
    ],
    example: `#include <RailVehicle.h>

// Custom locomotive implementation
class MyLocomotive : public RailVehicle::RailVehicle {
public:
    void Run() override {
        // Implementation
    }
};`,
    filePath: 'RailVehicle/RailVehicle.h',
    lineStart: 38,
    lineEnd: 55
  },
  {
    id: 'railvehicle-locomotive-class',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'Locomotive',
    brief: 'Base class for different types of locomotives',
    description: 'Represents a locomotive in the RailNex Train Simulator. Base class for electric, diesel, and steam locomotives. Inherits from RailVehicle and includes locomotive-specific properties and methods.',
    signature: 'class RAILVEHICLE_API Locomotive : public RailVehicle',
    members: [
      'ElectricalSys electricalSystem',
      'AirCompressor airCompressor',
      'AirBrake airBrake',
      'Pantograph pantograph',
      'CabViewType cabView'
    ],
    example: `// Create a diesel locomotive
auto locomotive = std::make_unique<DieselLocomotive>();
locomotive->SetPower(3000); // 3000 HP`,
    filePath: 'RailVehicle/RailVehicles/CarTypes/Locomotive.h',
    lineStart: 24,
    lineEnd: 98
  },
  {
    id: 'railvehicle-electric-locomotive',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'ElectricLocomotive',
    brief: 'Electric-powered locomotive implementation',
    description: 'Represents an electric locomotive with pantograph support and electric power systems.',
    signature: 'class RAILVEHICLE_API ElectricLocomotive : public Locomotive',
    filePath: 'RailVehicle/RailVehicles/CarTypes/Locomotive.h'
  },
  {
    id: 'railvehicle-diesel-locomotive',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'DieselLocomotive',
    brief: 'Diesel-powered locomotive implementation',
    description: 'Represents a diesel locomotive with diesel engine simulation.',
    signature: 'class RAILVEHICLE_API DieselLocomotive : public Locomotive',
    filePath: 'RailVehicle/RailVehicles/CarTypes/Locomotive.h'
  },
  {
    id: 'railvehicle-steam-locomotive',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'SteamLocomotive',
    brief: 'Steam-powered locomotive implementation',
    description: 'Represents a steam locomotive with firebox, boiler, and steam dynamics simulation.',
    signature: 'class RAILVEHICLE_API SteamLocomotive : public Locomotive',
    filePath: 'RailVehicle/RailVehicles/CarTypes/Locomotive.h'
  },
  {
    id: 'railvehicle-passenger-car',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'PassengerCar',
    brief: 'Passenger car implementation',
    description: 'Represents a passenger-carrying railroad car with seating and amenities.',
    signature: 'class RAILVEHICLE_API PassengerCar : public RailVehicle',
    filePath: 'RailVehicle/RailVehicles/CarTypes/PassengerCar.h'
  },
  {
    id: 'railvehicle-freight-car',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'class',
    name: 'FreightCar',
    brief: 'Freight car base class',
    description: 'Base class for freight-hauling railroad cars including boxcars, tank cars, hoppers, etc.',
    signature: 'class RAILVEHICLE_API FreightCar : public RailVehicle',
    filePath: 'RailVehicle/RailVehicles/CarTypes/FreightCar.h'
  },
  {
    id: 'railvehicle-type-enum',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'enum',
    name: 'RailVehicleType',
    brief: 'Enumeration of rail vehicle types',
    description: 'Defines the primary categories of rail vehicles in the simulator.',
    signature: 'enum class RAILVEHICLE_API RailVehicleType : uint8_t',
    members: [
      'Locomotive = 0',
      'FreightCar = 1',
      'PassCar = 2',
      'ControlCar = 3',
      'MowVehicle = 4',
      'Other = 5'
    ],
    filePath: 'RailVehicle/RailVehicle.h',
    lineStart: 23,
    lineEnd: 31
  },
  {
    id: 'railvehicle-locomotive-type-enum',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'enum',
    name: 'LocomotiveType',
    brief: 'Enumeration of locomotive power types',
    description: 'Classifies locomotives by their power source.',
    signature: 'enum class RAILVEHICLE_API LocomotiveType : uint8_t',
    members: [
      'Diesel = 0',
      'Electric = 1',
      'Steam = 2',
      'Other = 3'
    ],
    filePath: 'RailVehicle/RailVehicle.h'
  },
  {
    id: 'railvehicle-cabview-enum',
    library: 'RailVehicle',
    namespace: 'RailVehicle',
    type: 'enum',
    name: 'CabViewType',
    brief: 'Locomotive cab view enumeration',
    description: 'Defines the available cab views for locomotives.',
    signature: 'enum class CabViewType',
    members: [
      'Front = 0',
      'Rear = 1',
      'Void = 2'
    ],
    filePath: 'RailVehicle/RailVehicles/CarTypes/Locomotive.h'
  },

  // Objects Library (RNX File Format)
  {
    id: 'objects-rnx-vehicle-struct',
    library: 'Objects',
    namespace: 'C API',
    type: 'struct',
    name: 'RNX_Vehicle',
    brief: 'RNX extension data for vehicle glTF assets',
    description: 'Extends glTF 2.0 with RailNex-specific vehicle data including physics groups, mount points, electrical systems, and LOD profiles. Used in the custom .rnx file format.',
    signature: 'typedef struct RNX_Vehicle',
    members: [
      'const char* type // "locomotive", "passenger_car", etc.',
      'const char* role // "lead", "mid", "tail"',
      'const char* nameTag',
      'const char** notes',
      'RNX_MountPoint* mountPoints',
      'RNX_Systems systems',
      'RNX_PhysicsGroup* physicsGroups',
      'float bodyMassKg',
      'float comLocal[3]',
      'RNX_LOD* lodProfile'
    ],
    example: `// Parse RNX vehicle extension from glTF
RNX_Vehicle vehicle;
vehicle.type = "locomotive";
vehicle.role = "lead";
vehicle.nameTag = "EMD_GP38-2";
vehicle.bodyMassKg = 125000.0f;`,
    filePath: 'Objects/Registry/rnx_extensions.h',
    lineStart: 61,
    lineEnd: 92
  },
  {
    id: 'objects-rnx-mountpoint-struct',
    library: 'Objects',
    namespace: 'C API',
    type: 'struct',
    name: 'RNX_MountPoint',
    brief: 'Defines attachment points on vehicle models',
    description: 'Specifies locations for couplers, pantographs, MU cables, air hoses, and other attachments on rail vehicle 3D models.',
    signature: 'typedef struct RNX_MountPoint',
    filePath: 'Objects/Registry/rnx_extensions.h'
  },
  {
    id: 'objects-rnx-lod-struct',
    library: 'Objects',
    namespace: 'C API',
    type: 'struct',
    name: 'RNX_LOD',
    brief: 'Level-of-detail profile for models',
    description: 'Defines LOD switching distances for optimizing rendering performance based on camera distance.',
    signature: 'typedef struct RNX_LOD',
    members: [
      'const char* name',
      'float distanceM'
    ],
    example: `RNX_LOD lods[3];
lods[0] = {"L0", 0.0f};    // High detail
lods[1] = {"L1", 500.0f};  // Medium detail
lods[2] = {"L2", 1000.0f}; // Low detail`,
    filePath: 'Objects/Registry/rnx_extensions.h'
  },
  {
    id: 'objects-rnx-world-struct',
    library: 'Objects',
    namespace: 'C API',
    type: 'struct',
    name: 'RNX_World',
    brief: 'World object placement data',
    description: 'Defines world objects like signals, switches, track segments, and terrain tiles in the RNX format.',
    signature: 'typedef struct RNX_World',
    members: [
      'const char* objectType // "signal", "switch", "track_segment", "terrain_tile"',
      'const char* nameTag',
      'bool assumedPlacement',
      'const char* rule',
      'float offsetLocal[3]',
      'float gaugeMm',
      'float cantDeg',
      'RNX_Terrain terrain'
    ],
    filePath: 'Objects/Registry/rnx_extensions.h',
    lineStart: 93,
    lineEnd: 109
  },

  // ModelViewer/Core Library (Data Structures)
  {
    id: 'core-railvehicledata-struct',
    library: 'Core',
    namespace: 'RailNex',
    type: 'struct',
    name: 'RailVehicleData',
    brief: 'Complete rail vehicle configuration structure',
    description: 'Comprehensive data structure supporting all vehicle types (locomotives, freight cars, passenger cars) with database integration, physical characteristics, and locomotive-specific systems.',
    signature: 'struct RailVehicleData',
    members: [
      'int32_t databaseId',
      'std::string guid',
      'std::string name',
      'std::string model',
      'VehicleType vehicleType',
      'PowerType powerType',
      'float horsePower',
      'float tractionEffort',
      'BatteryConfig battery',
      'PantographConfig pantograph',
      'AirBrakeConfig airBrake',
      'EOTConfig eot',
      'CabDevicesConfig cabDevices',
      'float length, width, height, weight',
      'int32_t seatingCapacity',
      'float cargoCapacity'
    ],
    example: `RailVehicleData locomotive;
locomotive.name = "EMD GP38-2 #1234";
locomotive.model = "GP38-2";
locomotive.vehicleType = VehicleType::Locomotive;
locomotive.powerType = PowerType::Diesel;
locomotive.horsePower = 2000.0f;
locomotive.maxSpeed = 65.0f;`,
    filePath: 'ModelViewer/Core/LocomotiveData.h',
    lineStart: 215,
    lineEnd: 277
  },
  {
    id: 'core-vehicletype-enum',
    library: 'Core',
    namespace: 'RailNex',
    type: 'enum',
    name: 'VehicleType',
    brief: 'Vehicle type enumeration matching RailVehicle module',
    description: 'Classifies rail vehicles into primary categories.',
    signature: 'enum class VehicleType : uint8_t',
    members: [
      'Locomotive = 0',
      'FreightCar = 1',
      'PassengerCar = 2',
      'ControlCar = 3',
      'MOWVehicle = 4',
      'Other = 5'
    ],
    filePath: 'ModelViewer/Core/LocomotiveData.h',
    lineStart: 28,
    lineEnd: 38
  },
  {
    id: 'core-powertype-enum',
    library: 'Core',
    namespace: 'RailNex',
    type: 'enum',
    name: 'PowerType',
    brief: 'Locomotive power source enumeration',
    description: 'Defines the power source types for locomotives.',
    signature: 'enum class PowerType : uint8_t',
    members: [
      'Diesel = 0',
      'Electric = 1',
      'Steam = 2',
      'DieselHydraulic = 3',
      'Battery = 4',
      'Hybrid = 5',
      'Other = 6'
    ],
    filePath: 'ModelViewer/Core/LocomotiveData.h'
  },
  {
    id: 'core-freightcartype-enum',
    library: 'Core',
    namespace: 'RailNex',
    type: 'enum',
    name: 'FreightCarType',
    brief: 'Freight car classification enumeration',
    description: 'Categorizes freight cars by their design and cargo type.',
    signature: 'enum class FreightCarType : uint8_t',
    members: [
      'Boxcar = 0',
      'Flatcar = 1',
      'Gondola = 2',
      'Hopper = 3',
      'Tank = 4',
      'Refrigerator = 5',
      'Autorack = 6',
      'Intermodal = 7',
      'Covered_Hopper = 8',
      'Other = 9'
    ],
    filePath: 'ModelViewer/Core/LocomotiveData.h'
  },
  {
    id: 'core-passengercartype-enum',
    library: 'Core',
    namespace: 'RailNex',
    type: 'enum',
    name: 'PassengerCarType',
    brief: 'Passenger car classification enumeration',
    description: 'Categorizes passenger cars by their service type.',
    signature: 'enum class PassengerCarType : uint8_t',
    members: [
      'Coach = 0',
      'Sleeper = 1',
      'Diner = 2',
      'Lounge = 3',
      'Baggage = 4',
      'Combine = 5',
      'Dome = 6',
      'Observation = 7',
      'Other = 8'
    ],
    filePath: 'ModelViewer/Core/LocomotiveData.h'
  },
  {
    id: 'core-railvehicledatabase-class',
    library: 'Core',
    namespace: 'RailNex',
    type: 'class',
    name: 'RailVehicleDatabase',
    brief: 'Rail vehicle database manager with SQL integration',
    description: 'Singleton database manager for rail vehicles. Supports in-memory cache with SQL database synchronization for manufacturer, ownership, and vehicle data.',
    signature: 'class RailVehicleDatabase',
    members: [
      'static RailVehicleDatabase& Get()',
      'void AddVehicle(const RailVehicleData& vehicle)',
      'void RemoveVehicle(size_t index)',
      'RailVehicleData* GetVehicle(size_t index)',
      'RailVehicleData* GetVehicleById(int32_t databaseId)',
      'std::vector<RailVehicleData*> GetVehiclesByType(VehicleType type)',
      'bool LoadFromFile(const std::string& filepath)'
    ],
    example: `auto& db = RailVehicleDatabase::Get();

RailVehicleData locomotive;
locomotive.name = "EMD GP38-2";
db.AddVehicle(locomotive);

auto diesels = db.GetVehiclesByType(VehicleType::Locomotive);`,
    filePath: 'ModelViewer/Core/LocomotiveData.h',
    lineStart: 380,
    lineEnd: 413
  },

  // Database Library
  {
    id: 'database-vehiclerepository-class',
    library: 'Database',
    namespace: 'RailNex::Database',
    type: 'class',
    name: 'VehicleRepository',
    brief: 'Repository pattern for accessing railroad vehicle data',
    description: 'Provides structured access to vehicle data in the SQL database using the repository pattern. Supports inserting, querying, and managing locomotive, freight car, and passenger car records.',
    signature: 'class RNX_DATABASE VehicleRepository',
    members: [
      'explicit VehicleRepository(DatabaseManager& manager)',
      'int64_t InsertVehicle(const std::string& continent, const std::string& region, const std::string& stateProvince, const RailroadVehicleData& vehicle)',
      'int64_t InsertLocomotive(...)',
      'int64_t InsertFreightCar(...)',
      'int64_t InsertPassengerCar(...)'
    ],
    example: `DatabaseManager dbManager("vehicles.db");
VehicleRepository repo(dbManager);

LocomotiveData loco;
loco.roadName = "Union Pacific";
loco.model = "AC4400CW";
loco.horsePower = 4400.0;

int64_t id = repo.InsertLocomotive("North America", "United States", "Nebraska", loco);`,
    filePath: 'Database/Util/VehicleRepository.h',
    lineStart: 28,
    lineEnd: 100
  },
  {
    id: 'database-railroadvehicledata-struct',
    library: 'Database',
    namespace: 'RailNex::Database',
    type: 'struct',
    name: 'RailroadVehicleData',
    brief: 'Base structure for railroad vehicle data',
    description: 'Database model for railroad vehicles with operator information, physical dimensions, and service dates.',
    signature: 'struct RNX_DATABASE RailroadVehicleData',
    members: [
      'int64_t id',
      'std::string roadName',
      'std::string reportingMark',
      'std::string roadNumber',
      'VehicleType vehicleType',
      'std::string manufacturer',
      'std::string model',
      'int32_t yearBuilt',
      'int32_t yearRetired',
      'double lengthMeters, heightMeters, widthMeters',
      'double weightKg, capacityKg'
    ],
    filePath: 'Database/Models/RailroadVehicle.h',
    lineStart: 63,
    lineEnd: 91
  },
  {
    id: 'database-locomotivedata-struct',
    library: 'Database',
    namespace: 'RailNex::Database',
    type: 'struct',
    name: 'LocomotiveData',
    brief: 'Locomotive-specific database structure',
    description: 'Extends RailroadVehicleData with locomotive-specific fields like horsepower and tractive effort.',
    signature: 'struct RNX_DATABASE LocomotiveData : public RailroadVehicleData',
    filePath: 'Database/Models/RailroadVehicle.h',
    lineStart: 96,
    lineEnd: 152
  },
  {
    id: 'database-freightcardata-struct',
    library: 'Database',
    namespace: 'RailNex::Database',
    type: 'struct',
    name: 'FreightCarData',
    brief: 'Freight car-specific database structure',
    description: 'Extends RailroadVehicleData with freight car fields including cargo type, volume, and refrigeration capability.',
    signature: 'struct RNX_DATABASE FreightCarData : public RailroadVehicleData',
    members: [
      'FreightCarType freightType',
      'double volumeCubicMeters',
      'int32_t axleCount',
      'bool hasRefrigeration'
    ],
    filePath: 'Database/Models/RailroadVehicle.h',
    lineStart: 117,
    lineEnd: 132
  },

  // Math Library
  {
    id: 'math-namespace',
    library: 'Math',
    namespace: 'Math',
    type: 'namespace',
    name: 'Math',
    brief: 'Mathematics utilities for the simulator',
    description: 'Provides GLM-based math functions and utilities for 3D graphics, physics calculations, and transformations.',
    signature: 'namespace Math',
    filePath: 'RailNex/Math/Math.h'
  },

  // Logger Library
  {
    id: 'logger-macros',
    library: 'Logger',
    namespace: 'RailVehicle',
    type: 'function',
    name: 'RAILVEHICLE_LOG_*',
    brief: 'Module-specific logging macros',
    description: 'Logging macros for the RailVehicle module using the RailNex logger system.',
    signature: '#define RAILVEHICLE_LOG_TRACE/INFO/WARN/ERROR/FATAL(...)',
    example: `RAILVEHICLE_LOG_INFO("Locomotive {} initialized", locomotiveName);
RAILVEHICLE_LOG_WARN("Low air pressure: {} PSI", pressure);
RAILVEHICLE_LOG_ERROR("Brake system failure");`,
    filePath: 'RailVehicle/RailVehicleLog.h',
    lineStart: 38,
    lineEnd: 46
  }
];

const APIDocumentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLibrary, setSelectedLibrary] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDoc, setSelectedDoc] = useState<CodeElement | null>(null);

  // Get unique libraries and types
  const libraries = useMemo(() => {
    const unique = Array.from(new Set(API_DOCUMENTATION.map(doc => doc.library)));
    return ['all', ...unique.sort()];
  }, []);

  const types = useMemo(() => {
    const unique = Array.from(new Set(API_DOCUMENTATION.map(doc => doc.type)));
    return ['all', ...unique.sort()];
  }, []);

  // Filter documentation based on search and filters
  const filteredDocs = useMemo(() => {
    return API_DOCUMENTATION.filter(doc => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        doc.name.toLowerCase().includes(searchLower) ||
        doc.brief.toLowerCase().includes(searchLower) ||
        doc.description.toLowerCase().includes(searchLower) ||
        doc.library.toLowerCase().includes(searchLower) ||
        doc.namespace.toLowerCase().includes(searchLower);

      // Library filter
      const matchesLibrary = selectedLibrary === 'all' || doc.library === selectedLibrary;

      // Type filter
      const matchesType = selectedType === 'all' || doc.type === selectedType;

      return matchesSearch && matchesLibrary && matchesType;
    });
  }, [searchQuery, selectedLibrary, selectedType]);

  return (
    <div className="api-documentation">
      {/* Header */}
      <section className="api-header">
        <div className="api-header__content">
          <h1 className="api-header__title">RailNex API Documentation</h1>
          <p className="api-header__subtitle">
            Browse the RailNex codebase by library, class, struct, enum, and function
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="api-main">
          <div className="api-main__container">
            {/* Sidebar with Filters */}
            <aside className="api-sidebar">
              <div className="api-search">
                <input
                  type="text"
                  className="api-search__input"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="api-search__icon">🔍</span>
              </div>

              <div className="api-filters">
                <h3 className="api-filters__title">Filters</h3>

                <div className="filter-group">
                  <label className="filter-group__label">Library</label>
                  <select
                    className="filter-group__select"
                    value={selectedLibrary}
                    onChange={(e) => setSelectedLibrary(e.target.value)}
                  >
                    {libraries.map(library => (
                      <option key={library} value={library}>
                        {library === 'all' ? 'All Libraries' : library}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-group__label">Type</label>
                  <select
                    className="filter-group__select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedLibrary !== 'all' || selectedType !== 'all' || searchQuery) && (
                  <button
                    className="filter-reset"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedLibrary('all');
                      setSelectedType('all');
                      setSelectedDoc(null);
                    }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>

              <div className="api-stats">
                <div className="api-stats__item">
                  <span className="api-stats__number">{filteredDocs.length}</span>
                  <span className="api-stats__label">Results</span>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <main className="api-content">
              {selectedDoc ? (
                // Detail View
                <div className="doc-detail">
                  <button
                    className="doc-detail__back"
                    onClick={() => setSelectedDoc(null)}
                  >
                    ← Back to Results
                  </button>

                  <div className="doc-detail__breadcrumb">
                    <span>{selectedDoc.library}</span>
                    <span className="separator">›</span>
                    <span>{selectedDoc.namespace}</span>
                    <span className="separator">›</span>
                    <span className="badge badge--type">{selectedDoc.type}</span>
                  </div>

                  <h2 className="doc-detail__title">{selectedDoc.name}</h2>
                  <p className="doc-detail__brief">{selectedDoc.brief}</p>

                  {selectedDoc.signature && (
                    <div className="doc-detail__signature">
                      <code>{selectedDoc.signature}</code>
                    </div>
                  )}

                  <div className="doc-detail__content">
                    <p>{selectedDoc.description}</p>
                  </div>

                  {selectedDoc.members && selectedDoc.members.length > 0 && (
                    <div className="doc-detail__members">
                      <h3>Members</h3>
                      <ul>
                        {selectedDoc.members.map((member, idx) => (
                          <li key={idx}><code>{member}</code></li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedDoc.example && (
                    <div className="doc-detail__code">
                      <div className="code-header">
                        <span className="code-header__label">Code Example</span>
                        <button 
                          className="code-header__copy"
                          onClick={() => navigator.clipboard.writeText(selectedDoc.example || '')}
                        >
                          Copy
                        </button>
                      </div>
                      <pre><code>{selectedDoc.example}</code></pre>
                    </div>
                  )}

                  <div className="doc-detail__footer">
                    <div className="doc-detail__source">
                      <strong>Source:</strong> {selectedDoc.filePath}
                      {selectedDoc.lineStart && selectedDoc.lineEnd && (
                        <span> (lines {selectedDoc.lineStart}-{selectedDoc.lineEnd})</span>
                      )}
                    </div>
                    <a
                      href={`https://github.com/TheCorridor-Train-Simulator/RailNex/tree/main/${selectedDoc.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              ) : (
                // List View
                <div className="doc-list">
                  {filteredDocs.length === 0 ? (
                    <div className="doc-list__empty">
                      <div className="empty-icon">📚</div>
                      <h3>No documentation found</h3>
                      <p>Try adjusting your search or filters</p>
                    </div>
                  ) : (
                    <div className="doc-list__results">
                      {filteredDocs.map(doc => (
                        <article
                          key={doc.id}
                          className="doc-card"
                          onClick={() => setSelectedDoc(doc)}
                        >
                          <div className="doc-card__badges">
                            <span className="badge badge--library">{doc.library}</span>
                            <span className="badge badge--type">{doc.type}</span>
                          </div>
                          <h3 className="doc-card__title">
                            <code>{doc.name}</code>
                          </h3>
                          <p className="doc-card__brief">{doc.brief}</p>
                          <p className="doc-card__excerpt">
                            {doc.description.length > 120 
                              ? doc.description.substring(0, 120) + '...' 
                              : doc.description}
                          </p>
                          <div className="doc-card__footer">
                            <span className="doc-card__namespace">{doc.namespace}</span>
                            <span className="doc-card__link">View →</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </main>
          </div>
        </section>

        {/* Footer Note */}
        <section className="api-footer">
          <div className="api-footer__content">
            <p>
              <strong>Documentation Source:</strong> This API documentation is populated from Doxygen comments in the{' '}
              <a 
                href="https://github.com/TheCorridor-Train-Simulator/RailNex" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                RailNex GitHub repository
              </a>. For complete and up-to-date documentation, please refer to the source code.
            </p>
          </div>
        </section>
      </div>
  );
};

export default APIDocumentation;
