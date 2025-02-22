document.addEventListener('DOMContentLoaded', function() {
    // Department-Doctor mapping
    const doctors = {
        'eye-care': ['Dr. Robert Foster', 'Dr. Paul T. Finger'],
        'physical-therapy': ['Dr. Marilyn Moffat'],
        'dental-care': ['Dr. Bill Dorfman', 'Dr. Joseph Massad'],
        'diagnostic': ['Dr. Hedvig Hricak'],
        'skin-surgery': ['Dr. Jean Carruthers'],
        'surgery': ['Dr. Michael DeBakey', 'Dr. Gazi Yasargil']
    };

    // Update doctors dropdown based on department selection
    const departmentSelect = document.getElementById('department');
    const doctorSelect = document.getElementById('doctor');

    departmentSelect.addEventListener('change', function() {
        const selectedDepartment = this.value;
        const departmentDoctors = doctors[selectedDepartment];
        
        // Clear existing options
        doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
        
        // Add new options
        departmentDoctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.toLowerCase()
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
    });

    
});

function sub(){
    alert("Appointment Booked Successfully");
}

function cll() {
    var x = document.querySelector('.a');
    x.scrollLeft -= 325;
}
function clr() {
    var x = document.querySelector('.a');
    x.scrollLeft += 325;
}