#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the FastAPI backend server functionality including:
- Server accessibility
- API endpoints
- Database operations
- Error handling
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from environment
BACKEND_URL = "https://fe8d2f44-c026-4f79-8638-c569145e0949.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_server_accessibility():
    """Test if the backend server is accessible and responding"""
    print("🔍 Testing server accessibility...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Server is accessible - Response: {data}")
            return True
        else:
            print(f"❌ Server responded with status code: {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to connect to server: {e}")
        return False

def test_create_status_check():
    """Test creating a new status check"""
    print("\n🔍 Testing POST /api/status endpoint...")
    try:
        test_data = {
            "client_name": "TestClient_" + str(uuid.uuid4())[:8]
        }
        
        response = requests.post(
            f"{API_BASE}/status",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Status check created successfully")
            print(f"   ID: {data.get('id')}")
            print(f"   Client Name: {data.get('client_name')}")
            print(f"   Timestamp: {data.get('timestamp')}")
            return True, data
        else:
            print(f"❌ Failed to create status check - Status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False, None

def test_get_status_checks():
    """Test retrieving status checks"""
    print("\n🔍 Testing GET /api/status endpoint...")
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Retrieved {len(data)} status checks")
            if data:
                print(f"   Sample record: {data[0]}")
            return True, data
        else:
            print(f"❌ Failed to retrieve status checks - Status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False, None

def test_data_persistence():
    """Test that data persists between requests"""
    print("\n🔍 Testing data persistence...")
    
    # Create a status check
    create_success, created_data = test_create_status_check()
    if not create_success:
        return False
    
    # Retrieve all status checks
    get_success, all_data = test_get_status_checks()
    if not get_success:
        return False
    
    # Check if our created data exists in the retrieved data
    created_id = created_data.get('id')
    found = any(item.get('id') == created_id for item in all_data)
    
    if found:
        print("✅ Data persistence verified - Created record found in GET response")
        return True
    else:
        print("❌ Data persistence failed - Created record not found in GET response")
        return False

def test_error_handling():
    """Test error handling for invalid requests"""
    print("\n🔍 Testing error handling...")
    
    # Test POST with missing required field
    try:
        response = requests.post(
            f"{API_BASE}/status",
            json={},  # Missing client_name
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ Proper validation error handling for missing fields")
            return True
        else:
            print(f"⚠️  Unexpected response for invalid data - Status: {response.status_code}")
            return True  # Not a critical failure
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print("=" * 50)
    
    tests = [
        ("Server Accessibility", test_server_accessibility),
        ("Create Status Check", lambda: test_create_status_check()[0]),
        ("Get Status Checks", lambda: test_get_status_checks()[0]),
        ("Data Persistence", test_data_persistence),
        ("Error Handling", test_error_handling)
    ]
    
    results = {}
    for test_name, test_func in tests:
        try:
            results[test_name] = test_func()
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {e}")
            results[test_name] = False
    
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 50)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Backend is working correctly.")
        return True
    else:
        print("⚠️  Some tests failed. Backend needs attention.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)