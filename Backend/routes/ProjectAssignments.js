const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    try {
        // Assuming your request body contains employeeId and projectId
        const { employeeId, projectId } = req.body;

        // Check if the employee and project exist
        const employee = await Employee.findById(employeeId);
        const project = await Project.findById(projectId);

        if (!employee || !project) {
            return res.status(404).json({ message: 'Employee or Project not found' });
        }

        // Create a new assignment
        const newAssignment = new Assignment({
            employee: employeeId,
            project: projectId
        });

        // Save the assignment to the database
        await newAssignment.save();

        res.status(201).json({ message: 'Assignment created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})
