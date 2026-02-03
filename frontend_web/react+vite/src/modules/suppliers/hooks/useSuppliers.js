import { useState, useEffect } from "react";
import { getSuppliersService } from "../services/getSuppliersService";

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchSuppliers() {
    setLoading(true)
    try {
        const response = await getSuppliersService()
        setSuppliers(response)
    } catch (error) {
        setError(error)
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchSuppliers()
  }, [])

  return { suppliers, loading, error, fetchSuppliers }
}
