import streamlit as st
from calculations import total_service_cost

st.title("Lacost 40")

unit_cost = st.number_input("Unit Cost USD")
duration = st.number_input("Duration", min_value=1)
qty = st.number_input("Quantity", min_value=1)
uplf = st.number_input("UPLF", value=1.0)

cost = total_service_cost(unit_cost, 0, duration, qty, uplf)

st.metric("Total Cost", cost)
