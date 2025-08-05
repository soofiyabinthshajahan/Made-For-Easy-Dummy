import React, { useState } from 'react';
import './patientDashboard.css';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  available: boolean;
  hospitals: number[]; // Array of hospital IDs where the doctor works
}

interface Hospital {
  id: number;
  name: string;
  location: string;
  departments: string[];
}

interface Laboratory {
  id: number;
  name: string;
  testsAvailable: string[];
}

const PatientDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'doctors' | 'laboratory' | 'hospital'>('doctors');

  // Sample data - hospitals first since doctors reference them
  const hospitals: Hospital[] = [
    { id: 1, name: 'Aster Medcity', location: 'Ernakulam', departments: ['Cardiology', 'Neurology', 'Pediatrics'] },
    { id: 2, name: 'Baby Memorial Hospital', location: 'Kozhikode', departments: ['Orthopedics', 'Oncology', 'Dermatology'] },
    { id: 3, name: 'Rajagiri Hospital', location: 'Ernakulam', departments: ['General Medicine', 'Surgery', 'ENT'] },
  ];

  // Doctors now include hospital IDs they work at
  const doctors: Doctor[] = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', available: true, hospitals: [1] },
    { id: 2, name: 'Dr. Johnson', specialty: 'Neurology', available: false, hospitals: [1] },
    { id: 3, name: 'Dr. Williams', specialty: 'Pediatrics', available: true, hospitals: [2] },
    { id: 4, name: 'Dr. Brown', specialty: 'Orthopedics', available: true, hospitals: [ 3] },
  ];

  const laboratories: Laboratory[] = [
    { id: 1, name: 'Main Lab', testsAvailable: ['Blood Test', 'Urine Test', 'X-Ray'] },
    { id: 2, name: 'Specialized Lab', testsAvailable: ['MRI', 'CT Scan', 'Ultrasound'] },
    { id: 3, name: 'Emergency Lab', testsAvailable: ['COVID Test', 'Toxicology', 'Biopsy'] },
  ];

  // Helper function to get hospital names by IDs
  const getHospitalNames = (hospitalIds: number[]): string => {
    return hospitals
      .filter(hospital => hospitalIds.includes(hospital.id))
      .map(hospital => hospital.name)
      .join(', ');
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getHospitalNames(doctor.hospitals).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLabs = laboratories.filter(lab =>
    lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lab.testsAvailable.some(test => test.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.departments.some(dept => dept.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const showCombinedResults = searchTerm.length > 0;

  return (
    <div className="dashboard-container">
      {/* Top Navigation */}
      <header className="top-nav">
        <div className="nav-left">
          <div className="user-icon">
            <span>👤</span>
          </div>
          <h1 className="hospital-name">Sam</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search doctors, hospitals, labs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>🔍</button>
        </div>
      </header>

      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li 
              className={activeTab === 'doctors' && !showCombinedResults ? 'active' : ''}
              onClick={() => {
                setActiveTab('doctors');
                setSearchTerm('');
              }}
            >
              Doctors List
            </li>
            <li 
              className={activeTab === 'laboratory' && !showCombinedResults ? 'active' : ''}
              onClick={() => {
                setActiveTab('laboratory');
                setSearchTerm('');
              }}
            >
              Laboratory List
            </li>
            <li 
              className={activeTab === 'hospital' && !showCombinedResults ? 'active' : ''}
              onClick={() => {
                setActiveTab('hospital');
                setSearchTerm('');
              }}
            >
              Hospital List
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="content-area">
          {showCombinedResults ? (
            <div className="combined-results">
              <h2>Search Results for "{searchTerm}"</h2>
              
              {/* Doctors Results */}
              {filteredDoctors.length > 0 && (
                <div className="search-section">
                  <h3>Doctors</h3>
                  <ul className="search-results-list">
                    {filteredDoctors.map(doctor => (
                      <li key={doctor.id} className="doctor-card">
                        <h4>{doctor.name}</h4>
                        <p>Specialty: {doctor.specialty}</p>
                        <p className="works-at">Works at: {getHospitalNames(doctor.hospitals)}</p>
                        
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Laboratories Results */}
              {filteredLabs.length > 0 && (
                <div className="search-section">
                  <h3>Laboratories</h3>
                  <ul className="search-results-list">
                    {filteredLabs.map(lab => (
                      <li key={lab.id} className="lab-card">
                        <h4>{lab.name}</h4>
                        <p>Tests Available:</p>
                        <ul>
                          {lab.testsAvailable.map((test, index) => (
                            <li key={index}>{test}</li>
                          ))}
                        </ul>
                        
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hospitals Results */}
              {filteredHospitals.length > 0 && (
                <div className="search-section">
                  <h3>Hospitals</h3>
                  <ul className="search-results-list">
                    {filteredHospitals.map(hospital => (
                      <li key={hospital.id} className="hospital-card">
                        <h4>{hospital.name}</h4>
                        <p>Location: {hospital.location}</p>
                        <p>Departments:</p>
                        <ul>
                          {hospital.departments.map((dept, index) => (
                            <li key={index}>{dept}</li>
                          ))}
                        </ul>
                        <button>View Details</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* No results message */}
              {filteredDoctors.length === 0 && filteredLabs.length === 0 && filteredHospitals.length === 0 && (
                <div className="no-results">
                  <p>No results found matching your search.</p>
                </div>
              )}
            </div>
          ) : (
            activeTab === 'doctors' ? (
              <div className="doctors-list">
                <h2>Doctors</h2>
                {doctors.length === 0 ? (
                  <p>No doctors available.</p>
                ) : (
                  <ul>
                    {doctors.map(doctor => (
                      <li key={doctor.id} className="doctor-card">
                        <h3>{doctor.name}</h3>
                        <p>Specialty: {doctor.specialty}</p>
                        <p className="works-at">Works at: {getHospitalNames(doctor.hospitals)}</p>
                      
                        
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : activeTab === 'laboratory' ? (
              <div className="laboratory-list">
                <h2>Laboratories</h2>
                {laboratories.length === 0 ? (
                  <p>No laboratories available.</p>
                ) : (
                  <ul>
                    {laboratories.map(lab => (
                      <li key={lab.id} className="lab-card">
                        <h3>{lab.name}</h3>
                        <p>Tests Available:</p>
                        <ul>
                          {lab.testsAvailable.map((test, index) => (
                            <li key={index}>{test}</li>
                          ))}
                        </ul>
                        
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="hospital-list">
                <h2>Hospitals</h2>
                {hospitals.length === 0 ? (
                  <p>No hospitals available.</p>
                ) : (
                  <ul>
                    {hospitals.map(hospital => (
                      <li key={hospital.id} className="hospital-card">
                        <h3>{hospital.name}</h3>
                        <p>Location: {hospital.location}</p>
                        <p>Departments:</p>
                        <ul>
                          {hospital.departments.map((dept, index) => (
                            <li key={index}>{dept}</li>
                          ))}
                        </ul>
                        <button>View Details</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;