import React, { useState, useEffect } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import './App.css'
// import { validateStep1, validateStep2 } from '../utils/validation';
// import { loadFromLocalStorage, saveToLocalStorage } from '../utils/storage';

const MultiStepForm = () => {
	const [step, setStep] = useState(0)
	const [errors, setErrors] = useState({})
  const loadFromLocalStorage = () => {
		const storedData = localStorage.getItem('formData')
		return storedData ? JSON.parse(storedData) : null
	}
	const [formData, setFormData] = useState(
		loadFromLocalStorage() || {
			name: '',
			email: '',
			phone: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: ''
		}
	)
  
  const saveToLocalStorage = (formData) => {
		localStorage.setItem('formData', JSON.stringify(formData))
	}
	const validateStep1 = (formData, setErrors) => {
		const tempErrors = {}
		let isValid = true

		if (formData.name.trim() === '') {
			tempErrors.name = 'Please enter your name'
			isValid = false
		}

		const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
		if (formData.email.trim() === '') {
			tempErrors.email = 'Please enter your email address'
			isValid = false
		} else if (!emailPattern.test(formData.email)) {
			tempErrors.email = 'Please enter a valid email address'
			isValid = false
		}

		const phonePattern = /^\d{10}$/
		if (formData.phone.trim() === '') {
			tempErrors.phone = 'Please enter your phone number'
			isValid = false
		} else if (!phonePattern.test(formData.phone)) {
			tempErrors.phone = 'Please enter a 10-digit phone number'
			isValid = false
		}

		setErrors(tempErrors)
		return isValid
	}

	const validateStep2 = (formData, setErrors) => {
		const tempErrors = {}
		let isValid = true

		if (formData.address1.trim() === '') {
			tempErrors.address1 = 'Please enter your address'
			isValid = false
		}

		if (formData.city.trim() === '') {
			tempErrors.city = 'Please enter your city'
			isValid = false
		}

		if (formData.state.trim() === '') {
			tempErrors.state = 'Please enter your state'
			isValid = false
		}

		const zipPattern = /^\d{6}$/
		if (formData.zip.trim() === '') {
			tempErrors.zip = 'Please enter your zip code'
			isValid = false
		} else if (!zipPattern.test(formData.zip)) {
			tempErrors.zip = 'Please enter a valid 6-digit zip code'
			isValid = false
		}

		setErrors(tempErrors)
		return isValid
	}
	

	

	// Save data to local storage
	useEffect(() => {
		saveToLocalStorage(formData)
	}, [formData])

	// Proceed to the next step
	const nextStep = () => {
		let isValid = true

		// Validate each step before proceeding
		if (step === 0) {
			isValid = validateStep1(formData, setErrors)
		} else if (step === 1) {
			isValid = validateStep2(formData, setErrors)
		}

		if (isValid) {
			setStep(step + 1)
		}
	}

	const prevStep = () => {
		if (step > 0) {
			setStep(step - 1)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Form submitted successfully!');
		console.log('Form submitted:', formData)
		// Clear local storage and reset form data
		localStorage.removeItem('formData')
		setFormData({
			name: '',
			email: '',
			phone: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: ''
		})
		setStep(0)
	}

	return (
		<form onSubmit={handleSubmit}>
			{step === 0 && (
				<Step1
					formData={formData}
					setFormData={setFormData}
					errors={errors}
				/>
			)}
			{step === 1 && (
				<Step2
					formData={formData}
					setFormData={setFormData}
					errors={errors}
				/>
			)}
			{step === 2 && <Step3 formData={formData} />}
			<div className="button-group">
				{step > 0 && (
					<button
						type="button"
						onClick={prevStep}
						disabled={step === 0}
					>
						Back
					</button>
				)}
				{step < 3 ? (
					<button type="button" onClick={nextStep}>
						Next
					</button>
				) : (
					<button type="submit">Submit</button>
				)}
			</div>
		</form>
	)
}

export default MultiStepForm
