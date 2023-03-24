import React from 'react'

// rrd import
import {useLoaderData} from "react-router-dom"

// library import
import { toast } from 'react-toastify';

// components
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';

// helper functions
import { createBudget, fetchData, waait } from '../helpers'

// loader
export function dashboardLoader() {
    const userName = fetchData("userName"); 
    const budgets = fetchData("budgets"); 
    return { userName, budgets }
}

//action
export async function dashboardAction({ request }) {
    await waait();

    const data = await request.formData();
    // const formData = Object.fromEntries(data)
    const {_action, ...values } = Object.fromEntries(data)

    //new user submission
    if (_action === 'newUser') {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch (error) {
            throw new Error("There was a problem creating your account.")
        }
    }

    if (_action === 'createBudget') {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success('Budget created!')
        } catch (error) {
            throw new Error("There was a problem creating your budget.")
        }
    }

}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData()

  return (
    <>
        <h1>{userName ? (
        <div className="dashboard">
            <h1>Welcome back, <span className='accent'>{userName}</span></h1>
            <div className="grid-sm">
                {/* {budgets ? () : ()} */}
                <div className="grid-lg">
                    <div className="flex-lg">
                        <AddBudgetForm />
                    </div>
                </div>
            </div>
        </div>
        ) : <Intro />}</h1>
    </>
  )
}

export default Dashboard